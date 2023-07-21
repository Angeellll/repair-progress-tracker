import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { referenceNumber } = req.body;

  try {
    // Check if the reference number exists in the Order model
    const order = await prisma.order.findUnique({
      where: {
        RefNumber: parseInt(referenceNumber),
      },
    });

    if (order) {
      // If the reference number exists in the database, return a success response
      return res.status(200).json({ exists: true });
    } else {
      // If the reference number does not exist, return a not found response
      return res.status(404).json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking reference number in the database:", error);
    return res.status(500).json({ error: "An error occurred while checking the reference number." });
  }
}
