import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const appointmentID = parseInt(req.query.appointmentID);

  try {
    const appointmentDelete = await prisma.appointment.delete({
      where: { AppointmentID: appointmentID },
    });

    return res.status(200).json(appointmentDelete);
  } catch (error) {
    console.error("Error deleting order:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
