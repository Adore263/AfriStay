import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * Hash password using bcrypt
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt);
};

/**
 * Compare password with hash
 */
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

/**
 * Generate JWT token
 */
export const generateToken = (
  payload: { id: string; email: string; role: string },
  expiresIn: string = '24h'
): string => {
  const secret = process.env.JWT_SECRET || 'your-secret-key';
  return jwt.sign(payload, secret, { expiresIn });
};

/**
 * Generate refresh token
 */
export const generateRefreshToken = (
  payload: { id: string },
  expiresIn: string = '7d'
): string => {
  const secret = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret';
  return jwt.sign(payload, secret, { expiresIn });
};

/**
 * Verify token
 */
export const verifyToken = (token: string, secret?: string): any => {
  const tokenSecret = secret || process.env.JWT_SECRET || 'your-secret-key';
  try {
    return jwt.verify(token, tokenSecret);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

/**
 * Generate OTP
 */
export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 */
export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/[!@#$%^&*]/.test(password)) {
    errors.push('Password must contain at least one special character (!@#$%^&*)');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Sanitize user input
 */
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets to prevent XSS
    .substring(0, 1000); // Limit length
};

/**
 * Generate slug from string
 */
export const generateSlug = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Paginate results
 */
export const getPaginationParams = (
  page?: string | number,
  limit?: string | number
) => {
  const pageNum = Math.max(1, parseInt(String(page)) || 1);
  const limitNum = Math.min(100, Math.max(1, parseInt(String(limit)) || 10));
  const skip = (pageNum - 1) * limitNum;

  return { page: pageNum, limit: limitNum, skip };
};

/**
 * Format response
 */
export const formatResponse = (
  success: boolean,
  message: string,
  data?: any,
  meta?: any
) => {
  return {
    success,
    message,
    ...(data !== undefined && { data }),
    ...(meta && { meta }),
  };
};
