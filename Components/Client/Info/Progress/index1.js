import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CircularProgressBar from "./Circle";
import Card from "./Card";
import SeeMore from "./See";
import { useRouter } from "next/router";

const Titles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 80px;
`;

const Title = styled.h1`
  margin: 0px;
  margin-left: 80px;
  font-size: 40px;
  color: #03045e;
  font-family: Work Sans;
`;

const Ticket = styled.div`
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  width: 70vw;
  height: 300px;
`;

const API_BASE_URL = "/api/order";

function Progress() {
  const [customerName, setCustomerName] = useState("");
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const getReferenceNumberFromCache = () => {
    try {
      return localStorage.getItem("referenceNumber");
    } catch (error) {
      console.error("Error retrieving reference number from cache:", error);
      return "";
    }
  };

  const cachedRefNumber = getReferenceNumberFromCache();

  useEffect(() => {
    if (cachedRefNumber) {
      fetchOrderData(cachedRefNumber);
    }
  }, [cachedRefNumber]);

  const fetchOrderData = async (refNumber) => {
    try {
      const response = await fetch(`${API_BASE_URL}?refNumber=${refNumber}`);
      if (!response.ok) {
        throw new Error("Failed to fetch order data");
      }
      const data = await response.json();
      setCustomerName(data.CustomerName || "");
      setProgress(data.OrderProgress || 0);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  return (
    <Titles>
      <Title>Hello {customerName}!</Title>
      <p style={{margin: "0", marginTop: "10px", marginLeft: "80px", fontWeight: "500"}}>Here's a detailed summary of your repair progress.</p>
      <Ticket>
        <Img src="Receipt.png" />
        <Card />
        <CircularProgressBar progress={progress} />
      </Ticket>
      <SeeMore />
    </Titles>
  );
}

export default Progress;
