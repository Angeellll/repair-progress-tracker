import React from "react";
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

function Card() {
  return (
    <Wrapper>
      <Box>
        <Title>Ref number</Title>
        <Data>000085752257</Data>
      </Box>
      <Box>
        <Title>Date</Title>
        <Data>25 Feb 2023</Data>
      </Box>
      <Box>
      <Title>Client Name</Title>
        <Data>Jeth Nico Morado</Data>
        
      </Box>
      <Box>
        <Title>Assigned Repairman</Title>
        <Data>Jeth Nico Morado</Data>
      </Box>
      <Box>
        <Title>Payment</Title>
        <Data  style={{ fontWeight: "700"}}>Paid</Data>
      </Box>
      <Box>
      <Title>Status</Title>
        <Data style={{ color: "#0096C7" }}>On Going</Data>
      </Box>
    </Wrapper>
  );
}

export default Card;
