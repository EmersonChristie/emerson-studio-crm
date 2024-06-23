const prisma = require('../src/db');
const dotenv = require('dotenv');

// Ensure the script only runs in the test environment
if (process.env.NODE_ENV !== 'test') {
  throw new Error('This seed script can only be run in the test environment');
}

dotenv.config({ path: '.env.test' });

async function clearData() {
  const tables = ['Inquiry', 'EmailCampaign', 'Sale', 'Invoice', 'Contact', 'Artwork', 'User', 'Image'];
  for (const table of tables) {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${table}" CASCADE;`);
  }
}

async function main() {
  await clearData();

  // Seed Users
  const user1 = await prisma.user.create({
    data: { name: 'Alice', email: 'alice@example.com', age: 42 },
  });

  const user2 = await prisma.user.create({
    data: { name: 'Bob', email: 'bob@example.com', age: 21 },
  });

  // Seed Artworks
  const artwork1 = await prisma.artwork.create({
    data: {
      title: 'Sunset',
      description: 'A beautiful sunset painting',
      price: 200.0,
      artist: 'John Artist',
      category: 'Landscape',
      mainImage: {
        create: {
          url: 'http://example.com/sunset.jpg',
          altText: 'Sunset Image',
        },
      },
    },
  });

  const artwork2 = await prisma.artwork.create({
    data: {
      title: 'Ocean',
      description: 'An ocean landscape painting',
      price: 300.0,
      artist: 'Jane Artist',
      category: 'Seascape',
      mainImage: {
        create: {
          url: 'http://example.com/ocean.jpg',
          altText: 'Ocean Image',
        },
      },
    },
  });

  // Seed Contacts
  const contact1 = await prisma.contact.create({
    data: {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '123-456-7890',
    },
  });

  const contact2 = await prisma.contact.create({
    data: {
      name: 'Bob Williams',
      email: 'bob.williams@example.com',
      phone: '987-654-3210',
    },
  });

  // Seed Inquiries
  await prisma.inquiry.create({
    data: {
      message: 'I am interested in the Sunset painting.',
      artwork: { connect: { id: artwork1.id } },
      contact: { connect: { id: contact1.id } },
    },
  });

  await prisma.inquiry.create({
    data: {
      message: 'Is the Ocean painting still available?',
      artwork: { connect: { id: artwork2.id } },
      contact: { connect: { id: contact2.id } },
    },
  });

  // Seed EmailCampaigns
  await prisma.emailCampaign.create({
    data: {
      subject: 'New Artworks Available!',
      content: 'Check out our new artworks.',
      status: 'draft',
      contacts: {
        connect: [{ id: contact1.id }, { id: contact2.id }],
      },
    },
  });

  await prisma.emailCampaign.create({
    data: {
      subject: 'Special Discounts!',
      content: 'Get special discounts on selected artworks.',
      status: 'draft',
      contacts: {
        connect: [{ id: contact1.id }, { id: contact2.id }],
      },
    },
  });

  // Seed Sales
  const sale1 = await prisma.sale.create({
    data: {
      amount: 200.0,
      date: new Date(),
      contact: { connect: { id: contact1.id } },
      artwork: { connect: { id: artwork1.id } },
      paymentStatus: 'paid',
    },
  });

  const sale2 = await prisma.sale.create({
    data: {
      amount: 300.0,
      date: new Date(),
      contact: { connect: { id: contact2.id } },
      artwork: { connect: { id: artwork2.id } },
      paymentStatus: 'unpaid',
    },
  });

  // Seed Invoices
  await prisma.invoice.create({
    data: {
      total: 200.0,
      issuedDate: new Date(),
      dueDate: new Date(new Date().setDate(new Date().getDate() + 30)),
      status: 'paid',
      sales: {
        connect: { id: sale1.id },
      },
    },
  });

  await prisma.invoice.create({
    data: {
      total: 300.0,
      issuedDate: new Date(),
      dueDate: new Date(new Date().setDate(new Date().getDate() + 30)),
      status: 'unpaid',
      sales: {
        connect: { id: sale2.id },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
