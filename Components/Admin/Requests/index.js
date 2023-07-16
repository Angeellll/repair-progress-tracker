import React, {useState} from "react";
import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";
import Action from "../Requests/Action"

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
    props.status === "On-going" &&
    css`
      color: #0096c7;
    `}

  ${(props) =>
    props.status === "Finished" &&
    css`
      color: #05ff00;
    `}

    ${(props) =>
    props.status === "Failed" &&
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

function Requests() {

  
  const [activeButton, setActiveButton] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedRowData, setClickedRowData] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleOpenModal = (rowData) => {
    setIsModalOpen(true);
    setClickedRowData(rowData);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <Wrapper>
      <Header>
        <Icon icon="mdi:tools" width="40" style={{ marginRight: "15px" }} />
        <h2 style={{ fontFamily: "Roboto", fontWeight: "600" }}>
          Request Details
        </h2>
        <Search placeholder="Search" />
      </Header>
      <TableWrapper>
        <THead>
          <Th style={{ width: "10%" }}>Reference Number</Th>
          <Th style={{ width: "15%" }}>Client's Name</Th>
          <Th style={{ width: "15%" }}>Assigned Repairman</Th>
          <Th style={{ width: "10%" }}>Tool Under Repair</Th>
          <Th style={{ width: "7%", paddingRight: "10px" }}>Status</Th>
        </THead>
        <TBody>
  {[...Array(100)].map((_, index) => (
    <Tr key={index} onClick={() => handleOpenModal({  
      referenceNumber: "1001",
      fullName: "Jhaslyn E. Gerochi",
      assignedRepairman: "Jeth Nico T. Morado",
      toolUnderRepair: "Drill",
      status: "On-going",
    })}>
      <Td style={{ width: "10%" }}>1001</Td>
      <Td style={{ width: "15%" }}>Jhaslyn E. Gerochi</Td>
      <Td style={{ width: "15%" }}>Jeth Nico T. Morado</Td>
      <Td style={{ width: "10%" }}>Drill</Td>
      <TdS style={{ width: "7%" }} status="On-going">
        On-going
      </TdS>
    </Tr>
  ))}
</TBody>

      </TableWrapper>
      
    </Wrapper>
    <Action isOpen={isModalOpen} onClose={handleCloseModal}  rowData={clickedRowData} />
    </>
  );
}

export default Requests;
