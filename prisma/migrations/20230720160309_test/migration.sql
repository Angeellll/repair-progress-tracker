-- CreateTable
CREATE TABLE "Appointment" (
    "AppointmentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ClientName" TEXT NOT NULL,
    "Intent" TEXT NOT NULL,
    "Date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "SetDate" DATETIME NOT NULL,
    "AppointmentStatus" TEXT NOT NULL
);
