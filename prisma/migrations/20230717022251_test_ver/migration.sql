/*
  Warnings:

  - Added the required column `ContactNo` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "RefNumber" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerName" TEXT NOT NULL,
    "ContactNo" TEXT NOT NULL,
    "ToolUnderRepair" TEXT NOT NULL,
    "dateAccepted" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "etaCompletion" DATETIME NOT NULL,
    "OrderStatus" TEXT NOT NULL,
    "OrderProgress" TEXT NOT NULL,
    "RepairmanName" TEXT NOT NULL
);
INSERT INTO "new_Order" ("OrderProgress", "OrderStatus", "RefNumber", "RepairmanName", "ToolUnderRepair", "customerName", "dateAccepted", "etaCompletion") SELECT "OrderProgress", "OrderStatus", "RefNumber", "RepairmanName", "ToolUnderRepair", "customerName", "dateAccepted", "etaCompletion" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
