import React from "react";
import styled, {css}  from "styled-components";
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

const TableWrapper = styled.div`
  overflow: auto;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;

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

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  width: 100%;
  height: 80%;
  margin: 10px;
  padding: 10px;
  border: 1px solid #EAECF0;
  border-radius: 10px;
`;

const Thead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #F9FAFB;
  border: #EAECF0 1px solid;
`;

const Th = styled.th`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  height: 30px;
  color: #8A92A6;
`;

const Td = styled.td`
  padding: 0;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 600;
  height: fit-content;
  text-align: center;
  height: 40px;
  border-bottom: #EAECF0 1px solid;
`;

const TdS = styled.td`
  padding: 0;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 600;
  height: fit-content;
  text-align: center;
  height: 40px;
  border-bottom: #EAECF0 1px solid;

  ${(props) =>
    props.status === "On-going" &&
    css`
      color: #0096C7;
    `}

  ${(props) =>
    props.status === "Finished" &&
    css`
      color: #05FF00;
    `}

    ${(props) =>
      props.status === "Failed" &&
      css`
        color: #FF0000;
      `}
`;

const Tr = styled.div`


`

function Requests() {
  return (
    <Wrapper>
      <Header>
        <Icon icon="mdi:tools" width="40" style={{ marginRight: "15px" }} />
        <h2 style={{ fontFamily: "Roboto", fontWeight: "600" }}>
          Request Details
        </h2>
        <Search placeholder="Search" />
      </Header>
      <div style={{ paddingBottom: "10px" }}>
        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th style={{ width: "3%" }}>
                  <input type="checkbox" />
                </Th>
                <Th style={{ width: "8%" }}>Reference Number</Th>
                <Th style={{ width: "15%" }}>Client's Name</Th>
                <Th style={{ width: "10%" }}>Tool Under Repair</Th>
                <Th style={{ width: "10%" }}>Phone Number</Th>
                <Th style={{ width: "10%" }}>Date Accepted</Th>
                <Th style={{ width: "10%" }}>Estimated Completion</Th>
                <Th style={{ width: "7%" }}>Status</Th>
                <Th style={{ width: "5%" }}>Progress</Th>
                <Th style={{ width: "10%" }}>Actions</Th>
              </tr>
            </Thead>
            <tbody>
              {[...Array(100)].map((_, index) => (
                <>
                <tr key={index}>
                  <Td>
                    <input type="checkbox" />
                  </Td>
                  <Td>1001</Td>
                  <Td>Jeth Nico T. Morado</Td>
                  <Td>Drill</Td>
                  <Td>09123456789</Td>
                  <Td>06-23-23</Td>
                  <Td>07-01-23</Td>
                  <TdS status="On-going">On-going</TdS>
                  <Td>10%</Td>
                  <Td style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "50%"}}>
                    <Icon icon="fluent:delete-20-regular" width="20" color="red"/>
                    <Icon icon="fluent:edit-16-regular" width="20" color="blue"/>
                    </div>
                  </Td>
                </tr>
                <tr>
                  <Td>
                    <input type="checkbox" />
                  </Td>
                  <Td>1001</Td>
                  <Td>Jhaslyn E. Gerochi</Td>
                  <Td>Pliers</Td>
                  <Td>09123456789</Td>
                  <Td>06-23-23</Td>
                  <Td>07-01-23</Td>
                  <TdS status="Failed">Failed</TdS>
                  <Td>10%</Td>
                  <Td style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "50%"}}>
                    <Icon icon="fluent:delete-20-regular" width="20" color="red"/>
                    <Icon icon="fluent:edit-16-regular" width="20" color="blue"/>
                    </div>
                  </Td>
                </tr>
                <tr>
                  <Td>
                    <input type="checkbox" />
                  </Td>
                  <Td>1001</Td>
                  <Td>Jasper P. Carpenteros</Td>
                  <Td>Cutter</Td>
                  <Td>09123456789</Td>
                  <Td>06-23-23</Td>
                  <Td>07-01-23</Td>
                  <TdS status="Finished">Finished</TdS>
                  <Td>10%</Td>
                  <Td style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "50%"}}>
                    <Icon icon="fluent:delete-20-regular" width="20" color="red"/>
                    <Icon icon="fluent:edit-16-regular" width="20" color="blue"/>
                    </div>
                  </Td>
                </tr>
                <tr>
                  <Td>
                    <input type="checkbox" />
                  </Td>
                  <Td>1001</Td>
                  <Td>Jasper P. Carpenteros</Td>
                  <Td>Chainsaw</Td>
                  <Td>09123456789</Td>
                  <Td>06-23-23</Td>
                  <Td>07-01-23</Td>
                  <TdS status="Finished">Finished</TdS>
                  <Td>10%</Td>
                  <Td style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "50%"}}>
                    <Icon icon="fluent:delete-20-regular" width="20" color="red"/>
                    <Icon icon="fluent:edit-16-regular" width="20" color="blue"/>
                    </div>
                  </Td>
                </tr>
                </>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </div>
    </Wrapper>
  );
}

export default Requests;
