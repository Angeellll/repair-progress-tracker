import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
    } = req.body;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password and confirm password do not match" });
    }

    try {
      const customer = await prisma.customer.create({
        data: {
          ClientName: `${firstName} ${lastName}`,
          Password: password,
          Email: email,
          ContactNo: phoneNumber,
        },
      });

      console.log("Customer created:", customer);

      return res.status(200).json({ message: "Sign up successful" });
    } catch (error) {
      console.error("Error creating customer:", error);

      return res.status(500).json({ error: "An error occurred. Please try again later." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}