-- CreateTable
CREATE TABLE "Customer" (
    "UserID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ClientName" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "ContactNo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "RefNumber" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CustomerName" TEXT NOT NULL,
    "ContactNo" TEXT NOT NULL,
    "ToolUnderRepair" TEXT NOT NULL,
    "DateAccepted" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "EtaCompletion" DATETIME NOT NULL,
    "OrderStatus" TEXT NOT NULL,
    "OrderProgress" TEXT NOT NULL,
    "RepairmanName" TEXT NOT NULL,
    "PaymentStatus" TEXT NOT NULL
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
    "orderRefNumber" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Appointment" (
    "AppointmentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ClientName" TEXT NOT NULL,
    "Intent" TEXT NOT NULL,
    "Date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "SetDate" DATETIME NOT NULL,
    "AppointmentStatus" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "Customer_Email_idx" ON "Customer"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_ClientName_Email_ContactNo_key" ON "Customer"("ClientName", "Email", "ContactNo");

-- CreateIndex
CREATE UNIQUE INDEX "Repairman_RepairmanName_key" ON "Repairman"("RepairmanName");
