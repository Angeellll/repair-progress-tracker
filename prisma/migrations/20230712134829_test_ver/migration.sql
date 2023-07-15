/*
  Warnings:

  - You are about to drop the column `Username` on the `Customer` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Customer" (
    "UserID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ClientName" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "ContactNo" TEXT NOT NULL
);
INSERT INTO "new_Customer" ("ClientName", "ContactNo", "Email", "Password", "UserID") SELECT "ClientName", "ContactNo", "Email", "Password", "UserID" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
CREATE INDEX "Customer_Email_idx" ON "Customer"("Email");
CREATE UNIQUE INDEX "Customer_ClientName_Email_ContactNo_key" ON "Customer"("ClientName", "Email", "ContactNo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
