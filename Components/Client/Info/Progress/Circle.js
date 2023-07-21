import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Back from "./Back";

const Wrapper = styled.div`
  position: relative;
  right: 225px;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Progress = styled.progress`
  width: 120px;
  height: 120px;
  border-radius: 50%;

  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(#0f2675 ${props => props.value}%, #3982b7 0);
  align-items: center;
  justify-content: center;
  appearance: none;
  position: relative;

  &::-webkit-progress-bar {
    background-color: transparent;
  }

  &::-webkit-progress-value {
    background-color: transparent;
  }

  &::-moz-progress-bar {
    background-color: transparent;
  }

  &::before {
    content: "${props => props.value}%";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Montserrat;
  }
`;

const API_BASE_URL = "/api/order";

const ProgressBar = () => {
  const [progressValue, setProgressValue] = useState(0);

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
      setProgressValue(parseInt(data.OrderProgress) || 0);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  return (
    <Wrapper>
      <Progress value={progressValue} max={100} />
      <Back>SIGNOUT</Back>
    </Wrapper>
  );
};

export default ProgressBar;