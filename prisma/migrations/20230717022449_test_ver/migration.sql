/*
  Warnings:

  - You are about to drop the column `CateAccepted` on the `Order` table. All the data in the column will be lost.

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
INSERT INTO "new_Order" ("ContactNo", "CustomerName", "EtaCompletion", "OrderProgress", "OrderStatus", "RefNumber", "RepairmanName", "ToolUnderRepair") SELECT "ContactNo", "CustomerName", "EtaCompletion", "OrderProgress", "OrderStatus", "RefNumber", "RepairmanName", "ToolUnderRepair" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
