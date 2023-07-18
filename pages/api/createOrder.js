import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      fullName,
      phoneNumber,
      dateAccepted,
      etaCompletion,
      toolUnderRepair,
      assignedRepairman,
      status,
      progress,
    } = req.body;

    try {
      const isoDateAccepted = new Date(dateAccepted).toISOString();
      const isoEtaCompletion = new Date(etaCompletion).toISOString();

      const order = await prisma.order.create({
        data: {
          CustomerName: fullName,
          ContactNo: phoneNumber,
          ToolUnderRepair: toolUnderRepair,
          DateAccepted: isoDateAccepted,
          EtaCompletion: isoEtaCompletion,
          OrderStatus: status,
          OrderProgress: progress,
          RepairmanName: assignedRepairman,
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
