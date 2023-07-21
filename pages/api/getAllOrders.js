import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const completedCount = await prisma.order.count({
      where: {
        OrderStatus: "Finished",
      },
    });

    const ongoingCount = await prisma.order.count({
      where: {
        OrderStatus: "On-going",
      },
    });

    const dueCount = await prisma.order.count({
      where: {
        OrderStatus: "Due",
      },
    });

    const orderCounts = {
      completed: completedCount,
      ongoing: ongoingCount,
      due: dueCount,
    };

    console.log("Order Counts:", orderCounts); // Log the data

    return res.status(200).json(orderCounts);
  } catch (error) {
    console.error("Error retrieving orders:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving orders." });
  }
}
