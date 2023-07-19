import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    referenceNumber,
    fullName,
    phoneNumber,
    dateAccepted,
    estimatedCompletion,
    toolUnderRepair,
    assignedRepairman,
    status,
    progress,
  } = req.body;

  try {
    const updatedOrder = await prisma.order.update({
      where: { RefNumber: referenceNumber },
      data: {
        CustomerName: fullName,
        ContactNo: phoneNumber,
        DateAccepted: new Date(dateAccepted),
        EtaCompletion: new Date(estimatedCompletion),
        ToolUnderRepair: toolUnderRepair,
        RepairmanName: assignedRepairman,
        OrderStatus: status,
        OrderProgress: progress,
      },
    });

    return res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
