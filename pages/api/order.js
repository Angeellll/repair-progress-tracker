import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { refNumber } = req.query;

  try {
    const order = await prisma.order.findUnique({
      where: {
        RefNumber: parseInt(refNumber), // Convert the reference number to an integer
      },
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error fetching order data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
