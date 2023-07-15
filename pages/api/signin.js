import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const customer = await prisma.customer.findFirst({
        where: {
          Email: email.toLowerCase(),
          Password: password,
        },
      });

      if (!customer) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      return res.status(200).json({ message: "Sign in successful" });
    } catch (error) {
      console.error("Error signing in:", error);

      return res
        .status(500)
        .json({ error: "An error occurred. Please try again later." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
