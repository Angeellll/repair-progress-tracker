import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 10% 90%;
  color: #484848;
  grid-gap: 0;
`;

const Header = styled.div`
  grid-row: 1;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const Search = styled.input.attrs({
  type: "search",
})`
  width: 30vw;
  height: 32px;
  border: 1px solid #0096c7;
  border-radius: 25px;
  font-family: "Roboto";
  color: rgba(3, 4, 94, 0.5);
  font-size: 15px;
  padding-left: 15px;
  display: flex;
  margin-left: 20px;

  &:hover {
    border-width: 2px;
  }

  &:focus {
    color: #484848;
    border-width: 2px;
    outline: none;
    background-color: white;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.div`
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 90%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden; /* Added to hide overflowing content */
`;

const Container = styled.div`
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 90%;
  height: 300px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  padding: 20px;
`;

const Container1 = styled.div`
  overflow: auto; /* Added to hide overflowing content */
  width: 100%;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
    border-radius: 4px;
  }
`;

const P = styled.p`
  margin: 0px;
  font-weight: 500;
`;

function FAQ() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch("/api/requests");
        if (response.ok) {
          const data = await response.json();
          setRequests(data);
        } else {
          console.error("Error retrieving requests:", response.statusText);
        }
      } catch (error) {
        console.error("Error retrieving requests:", error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <Wrapper>
      <Header>
        <Icon
          icon="mdi:customer-service"
          width="40"
          style={{ marginRight: "15px" }}
        />
        <h2 style={{ fontFamily: "Roboto", fontWeight: "600" }}>
          Frequently Asked Question
        </h2>
        {/* <Search placeholder="Search" /> */}
      </Header>
    </Wrapper>
  );
}

export default FAQ;
