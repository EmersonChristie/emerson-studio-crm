const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.inquiry.deleteMany();
  await prisma.emailCampaign.deleteMany();
  await prisma.sale.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.contact.deleteMany();
  await prisma.artwork.deleteMany();
  await prisma.user.deleteMany();
  await prisma.image.deleteMany();

  // Seed Users
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      age: 25,
    },
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
      artworkId: artwork1.id,
      contactId: contact1.id,
    },
  });

  await prisma.inquiry.create({
    data: {
      message: 'Is the Ocean painting still available?',
      artworkId: artwork2.id,
      contactId: contact2.id,
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
      contactId: contact1.id,
      artworkId: artwork1.id,
      paymentStatus: 'paid',
    },
  });

  const sale2 = await prisma.sale.create({
    data: {
      amount: 300.0,
      date: new Date(),
      contactId: contact2.id,
      artworkId: artwork2.id,
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
