import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await prisma.$queryRaw`SELECT 1;`;

      const {
        fullName,
        phoneNumber,
        dataAccepted,
        estimatedCompletion,
        toolUnderRepair,
        assignedRepairman,
        status,
        progress,
      } = req.body;

      const order = await prisma.order.create({
        data: {
          customerName: fullName,
          ContactNo: phoneNumber,
          dateAccepted: dataAccepted,
          etaCompletion: estimatedCompletion,
          ToolUnderRepair: toolUnderRepair,
          RepairmanName: assignedRepairman,
          OrderStatus: status,
          OrderProgress: progress,
        },
      });

      console.log("Order created:", order);

      return res.status(200).json({ message: "Order placed successfully" });
    } catch (error) {
      console.error("Error placing order:", error);

      return res
        .status(500)
        .json({ error: "An error occurred. Please try again later." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
