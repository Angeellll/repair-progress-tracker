-- CreateTable
CREATE TABLE "Customer" (
    "UserID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Username" TEXT NOT NULL,
    "ClientName" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "ContactNo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "RefNumber" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerUserID" INTEGER NOT NULL,
    "ToolUnderRepair" TEXT NOT NULL,
    "dateAccepted" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "etaCompletion" DATETIME NOT NULL,
    "OrderStatus" TEXT NOT NULL,
    "OrderProgress" TEXT NOT NULL,
    "repairmanRepairmanID" INTEGER NOT NULL,
    CONSTRAINT "Order_customerUserID_fkey" FOREIGN KEY ("customerUserID") REFERENCES "Customer" ("UserID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_repairmanRepairmanID_fkey" FOREIGN KEY ("repairmanRepairmanID") REFERENCES "Repairman" ("RepairmanID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Repairman" (
    "RepairmanID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "RepairmanName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Payment" (
    "PaymentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "PaymentStatus" TEXT NOT NULL,
    "orderRefNumber" INTEGER NOT NULL,
    CONSTRAINT "Payment_orderRefNumber_fkey" FOREIGN KEY ("orderRefNumber") REFERENCES "Order" ("RefNumber") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Customer_Username_idx" ON "Customer"("Username");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_Username_ClientName_Email_ContactNo_key" ON "Customer"("Username", "ClientName", "Email", "ContactNo");

-- CreateIndex
CREATE UNIQUE INDEX "Repairman_RepairmanName_key" ON "Repairman"("RepairmanName");
