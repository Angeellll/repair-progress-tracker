import React from "react";
import styled from "styled-components";
import CircularProgressBar from "./Circle";
import Card from "./Card";
import SeeMore from "./See";

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

function Progress() {
  const progress = 5;

  return (
    <Titles>
      <Title>Hello ____!</Title>
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
