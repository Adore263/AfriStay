import { Request, Response, NextFunction } from 'express';
import winston from 'winston';

/**
 * Logger configuration using Winston
 */
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'afristay-api' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

/**
 * Request logger middleware
 */
export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const message = `${req.method} ${req.path} ${res.statusCode} ${duration}ms`;
    
    if (res.statusCode >= 400) {
      logger.error(message, {
        method: req.method,
        path: req.path,
        status: res.statusCode,
        duration,
      });
    } else {
      logger.info(message, {
        method: req.method,
        path: req.path,
        status: res.statusCode,
        duration,
      });
    }
  });

  next();
};

/**
 * Error logger
 */
export const logError = (error: any, context?: string) => {
  logger.error({
    message: error.message,
    stack: error.stack,
    context,
  });
};

/**
 * Info logger
 */
export const logInfo = (message: string, meta?: any) => {
  logger.info(message, meta);
};

export default logger;
