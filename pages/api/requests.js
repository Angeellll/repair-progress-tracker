import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const requests = await prisma.order.findMany();
      return res.status(200).json(requests);
    } catch (error) {
      console.error("Error retrieving requests:", error);
      return res
        .status(500)
        .json({ error: "An error occurred. Please try again later." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
