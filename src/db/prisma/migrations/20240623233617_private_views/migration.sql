/*
  Warnings:

  - You are about to drop the column `category` on the `Artwork` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `artworkId` on the `Inquiry` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `tax` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `createdById` to the `Artwork` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdById` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdById` to the `EmailCampaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdById` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Inquiry" DROP CONSTRAINT "Inquiry_artworkId_fkey";

-- AlterTable
ALTER TABLE "Artwork" DROP COLUMN "category",
ADD COLUMN     "createdById" INTEGER NOT NULL,
ALTER COLUMN "artist" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "address",
DROP COLUMN "name",
ADD COLUMN     "createdById" INTEGER NOT NULL,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "source" TEXT DEFAULT 'website';

-- AlterTable
ALTER TABLE "EmailCampaign" ADD COLUMN     "createdById" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Inquiry" DROP COLUMN "artworkId";

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "discount",
DROP COLUMN "tax",
ADD COLUMN     "createdById" INTEGER NOT NULL,
ADD COLUMN     "discountPercentage" DOUBLE PRECISION,
ADD COLUMN     "taxPercentage" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailConfirmToken" TEXT,
ADD COLUMN     "emailConfirmTokenExpiry" TIMESTAMP(3),
ADD COLUMN     "emailConfirmed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "emailConfirmedAt" TIMESTAMP(3),
ADD COLUMN     "organizationId" INTEGER,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "resetToken" TEXT,
ADD COLUMN     "resetTokenExpiry" TIMESTAMP(3),
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user',
ADD COLUMN     "salt" TEXT NOT NULL,
ADD COLUMN     "token" TEXT,
ADD COLUMN     "tokenExpiry" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtworkCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mainImageId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArtworkCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtworkPrivateView" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArtworkPrivateView_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtworkOffer" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contactId" INTEGER NOT NULL,
    "artworkId" INTEGER NOT NULL,

    CONSTRAINT "ArtworkOffer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtworkList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArtworkList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactAddress" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "contactId" INTEGER NOT NULL,

    CONSTRAINT "ContactAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArtworkToArtworkCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ArtworkToArtworkList" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ArtworkToInquiry" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ArtworkToArtworkPrivateView" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ArtworkPrivateViewToContact" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ArtworkCategory_mainImageId_key" ON "ArtworkCategory"("mainImageId");

-- CreateIndex
CREATE UNIQUE INDEX "ContactAddress_contactId_key" ON "ContactAddress"("contactId");

-- CreateIndex
CREATE UNIQUE INDEX "_ArtworkToArtworkCategory_AB_unique" ON "_ArtworkToArtworkCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtworkToArtworkCategory_B_index" ON "_ArtworkToArtworkCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ArtworkToArtworkList_AB_unique" ON "_ArtworkToArtworkList"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtworkToArtworkList_B_index" ON "_ArtworkToArtworkList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ArtworkToInquiry_AB_unique" ON "_ArtworkToInquiry"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtworkToInquiry_B_index" ON "_ArtworkToInquiry"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ArtworkToArtworkPrivateView_AB_unique" ON "_ArtworkToArtworkPrivateView"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtworkToArtworkPrivateView_B_index" ON "_ArtworkToArtworkPrivateView"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ArtworkPrivateViewToContact_AB_unique" ON "_ArtworkPrivateViewToContact"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtworkPrivateViewToContact_B_index" ON "_ArtworkPrivateViewToContact"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artwork" ADD CONSTRAINT "Artwork_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtworkCategory" ADD CONSTRAINT "ArtworkCategory_mainImageId_fkey" FOREIGN KEY ("mainImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtworkPrivateView" ADD CONSTRAINT "ArtworkPrivateView_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtworkOffer" ADD CONSTRAINT "ArtworkOffer_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtworkOffer" ADD CONSTRAINT "ArtworkOffer_artworkId_fkey" FOREIGN KEY ("artworkId") REFERENCES "Artwork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactAddress" ADD CONSTRAINT "ContactAddress_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailCampaign" ADD CONSTRAINT "EmailCampaign_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkToArtworkCategory" ADD CONSTRAINT "_ArtworkToArtworkCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Artwork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkToArtworkCategory" ADD CONSTRAINT "_ArtworkToArtworkCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "ArtworkCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkToArtworkList" ADD CONSTRAINT "_ArtworkToArtworkList_A_fkey" FOREIGN KEY ("A") REFERENCES "Artwork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkToArtworkList" ADD CONSTRAINT "_ArtworkToArtworkList_B_fkey" FOREIGN KEY ("B") REFERENCES "ArtworkList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkToInquiry" ADD CONSTRAINT "_ArtworkToInquiry_A_fkey" FOREIGN KEY ("A") REFERENCES "Artwork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkToInquiry" ADD CONSTRAINT "_ArtworkToInquiry_B_fkey" FOREIGN KEY ("B") REFERENCES "Inquiry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkToArtworkPrivateView" ADD CONSTRAINT "_ArtworkToArtworkPrivateView_A_fkey" FOREIGN KEY ("A") REFERENCES "Artwork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkToArtworkPrivateView" ADD CONSTRAINT "_ArtworkToArtworkPrivateView_B_fkey" FOREIGN KEY ("B") REFERENCES "ArtworkPrivateView"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkPrivateViewToContact" ADD CONSTRAINT "_ArtworkPrivateViewToContact_A_fkey" FOREIGN KEY ("A") REFERENCES "ArtworkPrivateView"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkPrivateViewToContact" ADD CONSTRAINT "_ArtworkPrivateViewToContact_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
