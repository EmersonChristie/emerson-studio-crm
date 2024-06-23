const dotenv = require('dotenv');
const prisma = require('../src/db');
const path = require('path');
const { execSync } = require('child_process');
const { beforeAll, afterAll } = require('vitest');

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test' });
} else {
  dotenv.config();
}

beforeAll(async () => {
  // Ensure the test database is reset and migrations are applied
  execSync(`npx prisma migrate reset --force --skip-generate`, {
    stdio: 'inherit',
    env: {
      ...process.env,
      DATABASE_URL: process.env.DATABASE_URL, // Ensure the migration uses the test database URL
    },
  });

  // Run the seed script
  const seedScriptPath = path.resolve(__dirname, './seedTestDb.js');
  execSync(`node ${seedScriptPath}`, {
    stdio: 'inherit',
    env: {
      ...process.env,
      DATABASE_URL: process.env.DATABASE_URL, // Ensure the seeding uses the test database URL
    },
  });
});

afterAll(async () => {
  // Disconnect Prisma after all tests
  await prisma.$disconnect();
});
