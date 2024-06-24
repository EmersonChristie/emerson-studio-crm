import { z } from 'zod';

const UserSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().email(),
  age: z.number().int(),
  role: z.string().default('user'),
  createdAt: z.date(),
  updatedAt: z.date(),
  password: z.string(),
  salt: z.string(),
  token: z.string().nullable().optional(),
  tokenExpiry: z.date().nullable().optional(),
  resetToken: z.string().nullable().optional(),
  resetTokenExpiry: z.date().nullable().optional(),
  emailConfirmed: z.boolean().default(false),
  emailConfirmToken: z.string().nullable().optional(),
  emailConfirmTokenExpiry: z.date().nullable().optional(),
  emailConfirmedAt: z.date().nullable().optional(),
  organizationId: z.number().int().nullable().optional(),
  privateViews: z.array(z.any()).optional(), // Placeholder for ArtworkPrivateViewSchema
  emailCampaigns: z.array(z.any()).optional(), // Placeholder for EmailCampaignSchema
  invoices: z.array(z.any()).optional(), // Placeholder for InvoiceSchema
  contacts: z.array(z.any()).optional(), // Placeholder for ContactSchema
  artworks: z.array(z.any()).optional(), // Placeholder for ArtworkSchema
});

const OrganizationSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  users: z.array(UserSchema).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const ImageSchema = z.object({
  id: z.number().int(),
  url: z.string().url(),
  altText: z.string().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  artworkMain: z.any().optional(), // Placeholder for ArtworkSchema
  artwork: z.any().optional(), // Placeholder for ArtworkSchema
  artworkId: z.number().int().nullable().optional(),
  artworkCategoryMain: z.any().optional(), // Placeholder for ArtworkCategorySchema
  isMain: z.boolean().default(false),
});

const ArtworkCategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  artworks: z.array(z.any()).optional(), // Placeholder for ArtworkSchema
  mainImageId: z.number().int().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const ArtworkPrivateViewSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullable().optional(),
  url: z.string().url(),
  content: z.string().nullable().optional(),
  artworks: z.array(z.any()).optional(), // Placeholder for ArtworkSchema
  contacts: z.array(z.any()).optional(), // Placeholder for ContactSchema
  createdBy: z.any(), // Placeholder for UserSchema
  createdById: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const ArtworkOfferSchema = z.object({
  id: z.number().int(),
  amount: z.number(),
  discount: z.number().nullable().optional(),
  message: z.string().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  contact: z.any().optional(), // Placeholder for ContactSchema
  contactId: z.number().int(),
  artwork: z.any().optional(), // Placeholder for ArtworkSchema
  artworkId: z.number().int(),
});

const ArtworkListSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  artworks: z.array(z.any()).optional(), // Placeholder for ArtworkSchema
  createdAt: z.date(),
  updatedAt: z.date(),
});

const ContactSchema = z.object({
  id: z.number().int(),
  firstName: z.string().nullable().optional(),
  lastName: z.string().nullable().optional(),
  email: z.string().email(),
  phone: z.string().nullable().optional(),
  address: z.any().optional(), // Placeholder for ContactAddressSchema
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.any().optional(), // Placeholder for UserSchema
  createdById: z.number().int().nullable().optional(),
  inquiries: z.array(z.any()).optional(), // Placeholder for InquirySchema
  emailCampaigns: z.array(z.any()).optional(), // Placeholder for EmailCampaignSchema
  sales: z.array(z.any()).optional(), // Placeholder for SaleSchema
  notes: z.string().nullable().optional(),
  privateViews: z.array(z.any()).optional(), // Placeholder for ArtworkPrivateViewSchema
  source: z.string().default('website'),
  offers: z.array(z.any()).optional(), // Placeholder for ArtworkOfferSchema
});

const InquirySchema = z.object({
  id: z.number().int(),
  message: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  artworks: z.array(z.any()).optional(), // Placeholder for ArtworkSchema
  contact: ContactSchema,
  contactId: z.number().int(),
  status: z.string().default('pending'),
});

const EmailCampaignSchema = z.object({
  id: z.number().int(),
  subject: z.string(),
  content: z.string(),
  sentAt: z.date().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.any(), // Placeholder for UserSchema
  createdById: z.number().int(),
  contacts: z.array(ContactSchema).optional(),
  status: z.string().default('draft'),
  template: z.string().nullable().optional(),
});

const SaleSchema = z.object({
  id: z.number().int(),
  amount: z.number(),
  date: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  contact: ContactSchema,
  contactId: z.number().int(),
  artwork: z.any().optional(), // Placeholder for ArtworkSchema
  artworkId: z.number().int(),
  invoice: z.any().optional(), // Placeholder for InvoiceSchema
  invoiceId: z.number().int().nullable().optional(),
  paymentStatus: z.string().default('unpaid'),
});

const InvoiceSchema = z.object({
  id: z.number().int(),
  total: z.number(),
  issuedDate: z.date(),
  dueDate: z.date(),
  status: z.string(),
  sales: z.array(SaleSchema).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.any().optional(), // Placeholder for UserSchema
  createdById: z.number().int(),
  paymentUrl: z.string().nullable().optional(),
  taxPercentage: z.number().nullable().optional(),
  discountPercentage: z.number().nullable().optional(),
});

const ContactAddressSchema = z.object({
  id: z.number().int(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  contactId: z.number().int(),
});

const ArtworkSchema = z.object({
  id: z.number().int().optional(),
  title: z.string().default('Untitled'),
  description: z.string().nullable().optional(),
  price: z.number().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  artist: z.string().nullable().optional(),
  categories: z.array(ArtworkCategorySchema).optional(),
  lists: z.array(ArtworkListSchema).optional(),
  status: z.string().default('available'),
  mainImage: ImageSchema.optional(),
  mainImageId: z.number().int().nullable().optional(),
  images: z.array(ImageSchema).optional(),
  inquiries: z.array(InquirySchema).optional(),
  sales: z.array(SaleSchema).optional(),
  privateViews: z.array(ArtworkPrivateViewSchema).optional(),
  createdBy: UserSchema,
  createdById: z.number().int(),
  offers: z.array(ArtworkOfferSchema).optional(),
});

export {
  UserSchema,
  OrganizationSchema,
  ImageSchema,
  ArtworkCategorySchema,
  ArtworkPrivateViewSchema,
  ArtworkOfferSchema,
  ArtworkListSchema,
  ContactSchema,
  InquirySchema,
  EmailCampaignSchema,
  SaleSchema,
  InvoiceSchema,
  ContactAddressSchema,
  ArtworkSchema,
};
