import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    appointmentID,
    clientName,
    intent,
    date,
    setDate,
    appointmentStatus,
  } = req.body;

  try {
    const updateAppointment = await prisma.appointment.update({
      where: { AppointmentID: appointmentID },
      data: {
        AppointmentID: appointmentID,
        ClientName: clientName,
        Intent: intent,
        Date: date,
        SetDate: setDate,
        AppointmentStatus: appointmentStatus,
      },
    });

    return res.status(200).json(updateAppointment);
  } catch (error) {
    console.error("Error updating appointment:", error);
    return res.status(500).json({ message: "Internal server appointment" });
  }
}
