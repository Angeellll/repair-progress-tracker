/*
  Warnings:

  - You are about to drop the column `Status` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `AppointmentStatus` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "AppointmentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ClientName" TEXT NOT NULL,
    "Intent" TEXT NOT NULL,
    "Date" DATETIME NOT NULL,
    "AppointmentStatus" TEXT NOT NULL
);
INSERT INTO "new_Appointment" ("AppointmentID", "ClientName", "Date", "Intent") SELECT "AppointmentID", "ClientName", "Date", "Intent" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
