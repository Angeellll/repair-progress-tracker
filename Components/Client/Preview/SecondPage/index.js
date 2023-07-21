import React, { useEffect, useState } from "react";
import Background from "@/Components/Client/Utils/Background";
import MoreButton from "../SecondPage/More";
import styled from "styled-components";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  justify-content: center;
`;

const CardContainer = styled.div`
  border: 1px #b7b7b7 solid;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-gap: 30px;
  padding: 20px;
  margin: 20px;
  width: 50%;
`;

const InfoContainer = styled.div`
  grid-row: 1;
  display: flex;
  width: 100%;
`;

const Box = styled.div`
  width: 15vw;
  height: 100px;
  border-radius: 10px;
  border: solid #b7b7b7 1px;
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

const SignInContainer = styled.div`
  grid-row: 2;
  display: flex;
  width: 100%;
  height: fit-content;
`;

const GreetingContainer = styled.div`
  grid-row: 1;
`;

export default function SecondPage() {
  const router = useRouter();
  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {
    const { refNumber } = router.query;
    if (refNumber) {
      // Save the reference number to cache
      saveReferenceNumberToCache(refNumber);
      // Fetch order status from the API using the reference number
      fetchOrderStatus(refNumber);
    } else {
      // If there's no reference number in the query, try to retrieve it from cache
      const cachedRefNumber = getReferenceNumberFromCache();
      if (cachedRefNumber) {
        // Fetch order status from the API using the cached reference number
        fetchOrderStatus(cachedRefNumber);
      }
    }
  }, [router.query]);

  const saveReferenceNumberToCache = (refNumber) => {
    try {
      localStorage.setItem("referenceNumber", refNumber);
    } catch (error) {
      console.error("Error saving reference number to cache:", error);
    }
  };

  const getReferenceNumberFromCache = () => {
    try {
      return localStorage.getItem("referenceNumber");
    } catch (error) {
      console.error("Error retrieving reference number from cache:", error);
      return null;
    }
  };

  const fetchOrderStatus = async (refNumber) => {
    try {
      const response = await fetch(`/api/references/${refNumber}`);
      if (response.ok) {
        const data = await response.json();
        setOrderStatus(data.OrderStatus);
      } else {
        console.error("Failed to fetch order status.");
      }
    } catch (error) {
      console.error("Error fetching order status:", error);
    }
  };

  return (
    <Background>
      <Wrapper>
        <GreetingContainer>
          <h2 style={{ marginTop: "-60px", fontSize: "30px", lineHeight: "50px" }}>
            Progress Overview
          </h2>
          <h4 style={{ marginTop: "-20px", fontSize: "15px", fontWeight: "400", width: "80%" }}>
            Please note that this is a simplified overview, and for more
            detailed information, we encourage you to
            sign in. We appreciate your patience
            and cooperation during this repair process.
          </h4>
        </GreetingContainer>
        <CardContainer>
          <InfoContainer>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Title>Ref number</Title>
                <Data>{router.query.refNumber || "N/A"}</Data>
              </Box>
              <Box>
                <Title>Status</Title>
                <Data style={{ color: "#0096C7" }}>{orderStatus || "N/A"}</Data>
              </Box>
            </div>
          </InfoContainer>
          <SignInContainer>
            <div style={{ width: "100%", display: "flex", justifyContent: "start" }}>
              <MoreButton />
            </div>
          </SignInContainer>
        </CardContainer>
      </Wrapper>
    </Background>
  );
}