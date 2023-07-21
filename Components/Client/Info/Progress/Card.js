import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 12px;
  position: fixed;
  margin-top: 35px;
  margin-left: 100px;
`;

const Box = styled.div`
  width: 15vw;
  height: 100px;
  border-radius: 10px;
  border: solid #b7b7b7 2px;
  background: none;
`;

const Title = styled.h5`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 13px;
  margin: 20px;
  color: rgba(112, 112, 112, 0.72);
`;

const Data = styled.h5`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #454545;
  margin: 20px;
  margin-top: -10px;
`;

const API_BASE_URL = "/api/order";

function Card() {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Try to retrieve the reference number from cache
    const cachedRefNumber = getReferenceNumberFromCache();
    if (cachedRefNumber) {
      setReferenceNumber(cachedRefNumber);
      // Fetch the order data from the Prisma database
      fetchOrderData(cachedRefNumber);
    }
  }, []);

  const getReferenceNumberFromCache = () => {
    try {
      return localStorage.getItem("referenceNumber");
    } catch (error) {
      console.error("Error retrieving reference number from cache:", error);
      return "";
    }
  };

  const fetchOrderData = async (refNumber) => {
    try {
      const response = await fetch(`${API_BASE_URL}?refNumber=${refNumber}`);
      if (!response.ok) {
        throw new Error("Failed to fetch order data");
      }
      const order = await response.json();

      if (order && order.DateAccepted) {
        // Convert ISO date to "Month Day, Year" format
        const formattedDate = new Date(order.DateAccepted).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        // Update the order object with the formatted date
        const updatedOrder = { ...order, DateAccepted: formattedDate };
        setOrderData(updatedOrder);
      }
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };
  
  return (
    <Wrapper>
      <Box>
        <Title>Ref number</Title>
        <Data>{referenceNumber || "N/A"}</Data>
      </Box>
      <Box>
        <Title>Date</Title>
        <Data>{orderData ? orderData.DateAccepted : "N/A"}</Data>
      </Box>
      <Box>
        <Title>Client Name</Title>
        <Data>{orderData ? orderData.CustomerName : "N/A"}</Data>
      </Box>
      <Box>
        <Title>Assigned Repairman</Title>
        <Data>{orderData ? orderData.RepairmanName : "N/A"}</Data>
      </Box>
      <Box>
        <Title>Payment</Title>
        <Data style={{ fontWeight: "700" }}>{orderData ? orderData.PaymentStatus : "N/A"}</Data>
      </Box>
      <Box>
        <Title>Status</Title>
        <Data style={{ color: "#0096C7" }}>{orderData ? orderData.OrderStatus : "N/A"}</Data>
      </Box>
    </Wrapper>
  );
}


export default Card;
