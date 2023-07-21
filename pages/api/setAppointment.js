import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      fullName,
      intent,
      setDate,
    } = req.body;

    try {

      const isSetDate = new Date(setDate).toISOString();

      const order = await prisma.appointment.create({
        data: {
          ClientName: fullName,
          Intent: intent,
          SetDate: isSetDate,
        },
      });

      return res.status(200).json(order);
    } catch (error) {
      console.error("Error creating order:", error);

      return res
        .status(500)
        .json({ error: "An error occurred. Please try again later." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
