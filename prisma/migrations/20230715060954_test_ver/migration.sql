/*
  Warnings:

  - You are about to drop the column `customerUserID` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `repairmanRepairmanID` on the `Order` table. All the data in the column will be lost.
  - Added the required column `RepairmanName` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerName` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Payment" (
    "PaymentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "PaymentStatus" TEXT NOT NULL,
    "orderRefNumber" INTEGER NOT NULL
);
INSERT INTO "new_Payment" ("PaymentID", "PaymentStatus", "orderRefNumber") SELECT "PaymentID", "PaymentStatus", "orderRefNumber" FROM "Payment";
DROP TABLE "Payment";
ALTER TABLE "new_Payment" RENAME TO "Payment";
CREATE TABLE "new_Order" (
    "RefNumber" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerName" TEXT NOT NULL,
    "ToolUnderRepair" TEXT NOT NULL,
    "dateAccepted" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "etaCompletion" DATETIME NOT NULL,
    "OrderStatus" TEXT NOT NULL,
    "OrderProgress" TEXT NOT NULL,
    "RepairmanName" TEXT NOT NULL
);
INSERT INTO "new_Order" ("OrderProgress", "OrderStatus", "RefNumber", "ToolUnderRepair", "dateAccepted", "etaCompletion") SELECT "OrderProgress", "OrderStatus", "RefNumber", "ToolUnderRepair", "dateAccepted", "etaCompletion" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
