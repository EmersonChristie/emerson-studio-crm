const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');

// Load the appropriate environment variables
if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test' });
} else {
  dotenv.config();
}

// Initialize PrismaClient with the correct database URL
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

module.exports = prisma;
