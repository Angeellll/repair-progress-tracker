/*
  Warnings:

  - You are about to drop the column `customerName` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `dateAccepted` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `etaCompletion` on the `Order` table. All the data in the column will be lost.
  - Added the required column `ContactNo` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CustomerName` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EtaCompletion` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "RefNumber" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CustomerName" TEXT NOT NULL,
    "ContactNo" TEXT NOT NULL,
    "ToolUnderRepair" TEXT NOT NULL,
    "DateAccepted" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "EtaCompletion" DATETIME NOT NULL,
    "OrderStatus" TEXT NOT NULL,
    "OrderProgress" TEXT NOT NULL,
    "RepairmanName" TEXT NOT NULL
);
INSERT INTO "new_Order" ("OrderProgress", "OrderStatus", "RefNumber", "RepairmanName", "ToolUnderRepair") SELECT "OrderProgress", "OrderStatus", "RefNumber", "RepairmanName", "ToolUnderRepair" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
