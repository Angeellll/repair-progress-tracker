-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "AppointmentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ClientName" TEXT NOT NULL,
    "Intent" TEXT NOT NULL,
    "Date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "SetDate" DATETIME NOT NULL,
    "AppointmentStatus" TEXT NOT NULL DEFAULT 'Pending'
);
INSERT INTO "new_Appointment" ("AppointmentID", "AppointmentStatus", "ClientName", "Date", "Intent", "SetDate") SELECT "AppointmentID", "AppointmentStatus", "ClientName", "Date", "Intent", "SetDate" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
