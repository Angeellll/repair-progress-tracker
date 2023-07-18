/*
  Warnings:

  - A unique constraint covering the columns `[CustomerName,ContactNo]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "Order_CustomerName_ContactNo_idx" ON "Order"("CustomerName", "ContactNo");

-- CreateIndex
CREATE UNIQUE INDEX "Order_CustomerName_ContactNo_key" ON "Order"("CustomerName", "ContactNo");
