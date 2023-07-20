import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";
import Action from "../PendingRequests/Action";


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

const TableWrapper = styled.table`
  grid-row: 2;
  margin: 15px;
  display: grid;
  grid-template-rows: 10% 90%;
  grid-gap: 0;
  border-radius: 10px;
  table-layout: auto;
  border: 1px solid #eaecf0;
`;

const THead = styled.thead`
  grid-row: 1;
  position: sticky;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #eaecf0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: 1px #eaecf0 solid;
`;

const TBody = styled.tbody`
  grid-row: 2;
  overflow: auto;

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

const Th = styled.th`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  height: 30px;
  color: #8a92a6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Td = styled.td`
  padding: 0;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 600;
  height: fit-content;
  text-align: center;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TdS = styled.td`
  padding: 0;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 600;
  height: fit-content;
  text-align: center;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.status === "Pending" &&
    css`
      color: #0096c7;
    `}

  ${(props) =>
    props.status === "Approved" &&
    css`
      color: #05ff00;
    `}

    ${(props) =>
    props.status === "Declined" &&
    css`
      color: #ff0000;
    `}
`;

const Tr = styled.tr`
  display: flex;
  justify-content: space-around;
  border-bottom: #eaecf0 1px solid;
  cursor: pointer;

  &:hover {
    background-color: #eaecf0;
  }
`;

const RefreshButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StatusFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const FilterButton = styled.button`
  background-color: ${(props) => (props.active ? "#03045e" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#03045e")};
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #03045e;
    color: white;
  }
`;

function appointments() {
  const [appointments, setappointments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedRowData, setClickedRowData] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleOpenModal = (rowData) => {
    setIsModalOpen(true);
    setClickedRowData(rowData);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  const fetchAppointmentData = async () => {
    try {
      const response = await fetch("/api/appointment");
      if (response.ok) {
        const data = await response.json();
        setappointments(data);
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

  const handleStatusFilter = (status) => {
    setSelectedStatus(status);
  };

  return (
    <>
      <Wrapper>
        <Header>
          <Icon icon="material-symbols:pending-actions" width="40" style={{ marginRight: "15px" }} />
          <h2 style={{ fontFamily: "Roboto", fontWeight: "600" }}>
          Appointment Requests
          </h2>
        </Header>
        <TableWrapper>
          <THead>
            <Th style={{ width: "10%" }}>Appointment ID</Th>
            <Th style={{ width: "15%" }}>Client's Name</Th>
            <Th style={{ width: "15%" }}>Intent</Th>
            <Th style={{ width: "10%" }}>Date Requested</Th>
            <Th style={{ width: "10%" }}>Set Appointment Date</Th>
            <Th style={{ width: "7%", paddingRight: "10px" }}>Status</Th>
          </THead>
          <TBody>
          {appointments
            .filter((appointment) => {
              if (selectedStatus === "") return true;
              return appointment.AppointmentStatus === selectedStatus;
            })
            .map((appointment) => (
              <Tr
                key={appointment.AppointmentID}
                onClick={() => handleOpenModal(appointment)}
              >
                <Td style={{ width: "10%" }}>{appointment.AppointmentID}</Td>
                <Td style={{ width: "15%" }}>{appointment.ClientName}</Td>
                <Td style={{ width: "15%" }}>{appointment.Intent}</Td>
                <Td style={{ width: "10%" }}>{formatDate(appointment.Date)}</Td>
                <Td style={{ width: "10%" }}>{formatDate(appointment.SetDate)}</Td>
                <TdS style={{ width: "7%" }} status={appointment.AppointmentStatus}>
                  {appointment.AppointmentStatus}
                </TdS>
              </Tr>
            ))}
          </TBody>
        </TableWrapper>
        <StatusFilter>
          <FilterButton
            active={selectedStatus === ""}
            onClick={() => handleStatusFilter("")}
          >
            All
          </FilterButton>
          <FilterButton
            active={selectedStatus === "Approved"}
            onClick={() => handleStatusFilter("Approved")}
          >
            Approved
          </FilterButton>
          <FilterButton
            active={selectedStatus === "Pending"}
            onClick={() => handleStatusFilter("Pending")}
          >
            Pending
          </FilterButton>
          <FilterButton
            active={selectedStatus === "Declined"}
            onClick={() => handleStatusFilter("Declined")}
          >
            Declined
          </FilterButton>
        </StatusFilter>
      </Wrapper>
      <Action
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        rowData={clickedRowData}
      />
    </>
  );
}

export default appointments;
