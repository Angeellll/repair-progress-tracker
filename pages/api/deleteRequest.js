import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const referenceNumber = parseInt(req.query.referenceNumber);

  try {
    const deletedOrder = await prisma.order.delete({
      where: { RefNumber: referenceNumber },
    });

    return res.status(200).json(deletedOrder);
  } catch (error) {
    console.error("Error deleting order:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
