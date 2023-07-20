import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";
import BarGraph from "./BarGraph";
import appointments from "../PendingRequests";

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

function Dashboard() {
  const [requests, setRequests] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

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

  const fetchAppointmentData = async () => {
    try {
      const response = await fetch("/api/appointment");
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      } else {
        console.error("Error retrieving appointments:", response.statusText);
      }
    } catch (error) {
      console.error("Error retrieving appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointmentData();

    const interval = setInterval(fetchAppointmentData, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Header>
        <Icon
          icon="material-symbols:dashboard"
          width="40"
          style={{ marginRight: "15px" }}
        />
        <h2 style={{ fontFamily: "Roboto", fontWeight: "600" }}>Dashboard</h2>
        {/* <Search placeholder="Search" /> */}
      </Header>
      <div
        style={{
          gridRow: "2",
          display: "grid",
          gridTemplateRows: "30% 70%",
          padding: "20px",
        }}
      >
        <div
          style={{
            gridRow: "1",
            display: "grid",
            gridTemplateColumns: "3",
          }}
        >
          <CardWrapper style={{ gridColumn: "1" }}>
            <CardContainer style={{ backgroundColor: "#98FF98" }}>
              <P>TRANSACTION</P>
              <h2 style={{ margin: "0px" }}>10</h2>
              <P>Completed</P>
            </CardContainer>
          </CardWrapper>

          <CardWrapper style={{ gridColumn: "2" }}>
            <CardContainer style={{ backgroundColor: "#89CFF0" }}>
              <P>ON-GOING</P>
              <h2 style={{ margin: "0px" }}>2</h2>
              <P>Repairs</P>
            </CardContainer>
          </CardWrapper>
          <CardWrapper style={{ gridColumn: "3" }}>
            <CardContainer style={{ backgroundColor: "salmon" }}>
              <P>DUE</P>
              <h2 style={{ margin: "0px" }}>1</h2>
              <P>Incoming</P>
            </CardContainer>
          </CardWrapper>
        </div>
        <div
          style={{ gridRow: "2", display: "grid", gridTemplateColumns: "2" }}
        >
          <CardWrapper style={{ gridColumn: "1" }}>
            <Container>
              <h3>Pending Appointment Requests</h3>
              <Container1>
                {appointments.map((appointment) => (
                  <>
                    <P>
                      <i>
                      
                        {appointment.AppointmentID} - {appointment.Intent}, {" "}
                        {formatDate(appointment.Date)}
                      </i>
                    </P>
                  </>
                ))}
              </Container1>
            </Container>
          </CardWrapper>
          <CardWrapper style={{ gridColumn: "2" }}>
            <Container>
              <h3>Transaction History</h3>
              <Container1>
                {requests.map((request) => (
                  <>
                    <P>
                      <i>
                        {" "}
                        {request.RefNumber} - {request.ToolUnderRepair},{" "}
                        {formatDate(request.EtaCompletion)}, {request.PaymentStatus}
                      </i>
                    </P>
                  </>
                ))}
              </Container1>
            </Container>
          </CardWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

export default Dashboard;
