-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "RefNumber" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerUserID" INTEGER NOT NULL,
    "ToolUnderRepair" TEXT NOT NULL,
    "dateAccepted" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "etaCompletion" DATETIME NOT NULL,
    "OrderStatus" TEXT NOT NULL,
    "OrderProgress" TEXT NOT NULL,
    "repairmanRepairmanID" INTEGER NOT NULL,
    CONSTRAINT "Order_repairmanRepairmanID_fkey" FOREIGN KEY ("repairmanRepairmanID") REFERENCES "Repairman" ("RepairmanID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("OrderProgress", "OrderStatus", "RefNumber", "ToolUnderRepair", "customerUserID", "dateAccepted", "etaCompletion", "repairmanRepairmanID") SELECT "OrderProgress", "OrderStatus", "RefNumber", "ToolUnderRepair", "customerUserID", "dateAccepted", "etaCompletion", "repairmanRepairmanID" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
