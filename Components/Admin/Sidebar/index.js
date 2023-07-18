import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Chat from "../FAQ";
import Requests from "../Requests/index";
import Trash from "../Trash";
import Dashboard from "../Dashboard";
import AddRequest from "../AddRequest";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 0;
  background-color: #caf0f8;
  color: #484848;
  overflow: hidden;
`;

const SideMenu = styled.div`
  grid-column: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const Logo = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Admin = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AddClient = styled.button`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #7280ff;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  padding: 8px;
  font-size: 15px;
  font-family: Roboto;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background: #6697c1;
    color: white;
  }
`;

const Option = styled.div`
  margin-top: 10px;
  width: 90%;
`;

const Choice = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  border-radius: 8px;
  padding: 8px;
  font-size: 15px;
  font-family: Roboto;
  font-weight: 500;
  border: none;
  background: none;
  cursor: pointer;
  height: 45px;
  font-size: 18px;

  &:hover {
    background: #6697c1;
    color: white;
  }
`;

const Content = styled.div`
  grid-column: 2;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Container = styled.div`
  background-color: white;
  height: 80%;
  width: 95%;
  background: #ffffff;
  border: 3px solid #90e0ef;
  box-shadow: 0px 10px 30px rgba(17, 38, 146, 0.05);
  border-radius: 20px;
  display: flex;
  align-items: start;
  justify-content: center;
`;

function Index() {
  const [activeButton, setActiveButton] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  

  return (
    <>
    <Wrapper>
      <SideMenu>
        <Logo>
          <img
            width="100"
            height="100"
            src="logo.png"
            style={{ marginLeft: "-15px" }}
            alt="Logo"
          />
          <h2 style={{ color: "#484848", fontFamily: "Work Sans" }}>
            Repair Tracker
          </h2>
        </Logo>
        <Admin>
          <Icon icon="mingcute:user-4-fill" width="100" />
          <h2
            style={{
              color: "#484848",
              fontFamily: "Work Sans",
              marginTop: "-3px",
            }}
          >
            Admin
          </h2>
        </Admin>
        <AddClient onClick={handleOpenModal}>
          <Icon
            icon="ic:round-plus"
            width="25"
            style={{ marginRight: "10px" }}
          />
          Add Repair Request
        </AddClient>
        <Option>
          <Choice onClick={() => handleButtonClick("dashboard")}>
            <span
              style={{
                width: "50px",
                display: "flex",
                justifyContent: "start",
              }}
            >
              <Icon icon="material-symbols:dashboard" width="25" />
            </span>
            Dashboard
          </Choice>
          <Choice onClick={() => handleButtonClick("requests")}>
            <span
              style={{
                width: "50px",
                display: "flex",
                justifyContent: "start",
              }}
            >
              <Icon icon="mdi:tools" width="20" />
            </span>
            Repair Request
          </Choice>
          <Choice onClick={() => handleButtonClick("chats")}>
            <span
              style={{
                width: "50px",
                display: "flex",
                justifyContent: "start",
              }}
            >
              <Icon icon="mdi:customer-service" width="25" />
            </span>
            FAQ
          </Choice>
{/* 
          <Choice onClick={() => handleButtonClick("trash")}>
            <span
              style={{
                width: "50px",
                display: "flex",
                justifyContent: "start",
              }}
            >
              <Icon icon="zondicons:trash" width="20" />
            </span>
            Trash
          </Choice> */}
        </Option>
      </SideMenu>
      <Content>
        <Container>
          {activeButton === "dashboard" && <Dashboard />}
          {activeButton === "requests" && <Requests />}
          {activeButton === "chats" && <Chat />}
          {/* {activeButton === "trash" && <Trash />} */}
        </Container>
        
      </Content>
      <AddRequest isOpen={isModalOpen} onClose={handleCloseModal} />
    </Wrapper>
    
    </>

  );
}

export default Index;
