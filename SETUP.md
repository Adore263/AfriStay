# AfriStay India - Development Setup

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL 14+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Adore263/AfriStay.git
cd AfriStay

# Install dependencies
npm install

# Set up environment variables
cp apps/api/.env.example apps/api/.env.local
cp apps/web/.env.example apps/web/.env.local

# Setup database
npm run migrate

# Seed database with sample data (optional)
npm run seed

# Start development servers
npm run dev
```

The app will be available at:
- **Web:** http://localhost:3000
- **API:** http://localhost:5000

## Project Structure

```
AfriStay/
├── apps/
│   ├── web/                 # Next.js frontend application
│   │   ├── src/
│   │   │   ├── components/  # Reusable React components
│   │   │   ├── pages/       # Next.js pages
│   │   │   ├── styles/      # Global styles
│   │   │   ├── hooks/       # Custom React hooks
│   │   │   ├── utils/       # Utility functions
│   │   │   ├── types/       # TypeScript types
│   │   │   └── services/    # API client services
│   │   └── package.json
│   │
│   └── api/                 # Express backend application
│       ├── src/
│       │   ├── routes/      # API route handlers
│       │   ├── controllers/ # Business logic
│       │   ├── models/      # Database models
│       │   ├── middleware/  # Express middleware
│       │   ├── services/    # Business services
│       │   ├── utils/       # Utility functions
│       │   ├── types/       # TypeScript types
│       │   └── config/      # Configuration files
│       ├── prisma/
│       │   ├── schema.prisma # Database schema
│       │   └── migrations/   # Database migrations
│       └── package.json
│
├── packages/
│   ├── types/               # Shared TypeScript types
│   └── utils/               # Shared utilities
│
├── .gitignore
├── package.json             # Root workspace config
├── tsconfig.json
├── prettier.config.js
├── eslint.config.js
└── README.md
```

## Key Features

### Student Dashboard
- 🔍 Advanced property search with filters
- ❤️ Save favorite properties
- 💬 Real-time messaging with landlords
- 📅 Schedule property viewings
- ⭐ Leave reviews and ratings
- 💳 Subscription management

### Landlord Dashboard
- 🏠 Property listing management
- 📊 Analytics and insights
- 📧 Lead management
- 💰 Subscription and billing
- ✅ Document verification

### Admin Dashboard
- 👥 User management
- 🏢 Property approval system
- 📈 Analytics and reporting
- 🔒 Moderation tools
- ⚙️ System configuration

### Premium Features
- 🎯 AI property recommendations
- 👥 Roommate matching
- 💲 Rent price analyzer
- 🎉 Community events & marketplace
- 🛡️ Enhanced verification badges

## Technology Stack

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Socket.io-client (real-time)

### Backend
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Socket.io (real-time)

### Infrastructure
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- AWS (hosting, storage, CDN)

### Third-party Services
- Razorpay (payments)
- Google Maps API
- SendGrid (email)
- Twilio (SMS, WhatsApp)
- AWS S3 (file storage)

## Environment Variables

### API (.env.local)
```
DATABASE_URL=postgresql://user:password@localhost:5432/afristay
JWT_SECRET=your_jwt_secret_here
JWT_REFRESH_SECRET=your_refresh_secret_here
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
SENDGRID_API_KEY=your_sendgrid_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
GOOGLE_MAPS_API_KEY=your_maps_key
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_S3_BUCKET=your_bucket_name
```

### Web (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_maps_key
```

## Database

### Initialize Database
```bash
npm run migrate
```

### Reset Database
```bash
cd apps/api
npx prisma migrate reset
```

### Open Database UI
```bash
npm run studio
```

## Development Commands

```bash
# Start all development servers
npm run dev

# Start only web
npm run dev:web

# Start only API
npm run dev:api

# Run linter
npm run lint

# Format code
npm run format

# Run tests
npm run test

# Build for production
npm run build

# Deploy migrations
npm run migrate:prod
```

## API Documentation

API endpoints are documented in `apps/api/README.md`

Main endpoints:
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/properties` - Get properties list
- `POST /api/properties` - Create property (landlord)
- `GET /api/properties/:id` - Get property details
- `POST /api/messages` - Send message
- `GET /api/subscriptions` - Get subscription plans
- `POST /api/payments/subscribe` - Subscribe to plan

## Security

- ✅ JWT authentication
- ✅ Role-based access control
- ✅ Input validation & sanitization
- ✅ CORS protection
- ✅ Rate limiting
- ✅ SQL injection prevention
- ✅ XSS protection
- ✅ CSRF tokens
- ✅ Password hashing (bcrypt)
- ✅ Audit logging

## Performance

- ✅ Database query optimization
- ✅ Redis caching
- ✅ CDN for static assets
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ API response compression
- ✅ Connection pooling

## Deployment

### Docker Setup
```bash
docker-compose up
```

### AWS Deployment
See `DEPLOYMENT.md` for detailed instructions

## Contributing

1. Create a feature branch
2. Make changes
3. Run tests and linting
4. Create pull request
5. Get code review
6. Merge to main

## License

MIT

## Support

For support, email support@afristay.com or open an issue on GitHub.
