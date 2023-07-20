-- CreateTable
CREATE TABLE "Appointment" (
    "AppointmentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ClientName" TEXT NOT NULL,
    "Intent" TEXT NOT NULL,
    "Date" DATETIME NOT NULL,
    "Status" TEXT NOT NULL
);
