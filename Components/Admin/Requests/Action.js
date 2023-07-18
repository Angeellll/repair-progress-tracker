import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Card from "@/Components/Client/Info/Progress/Card";

const Wrapper = styled.div`
  width: 75%;
  height: 80%;
  backdrop-filter: blur(1px);
  background-color: rgba(128, 128, 128, 0.1);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: #808080;
`;

const Container = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 45%;
  height: 90%;
  display: grid;
  grid-template-rows: 5% 95%;
`;

const Close = styled.div`
  margin: 10px;
  grid-row: 1;

  &:hover {
    cursor: pointer;
  }
`;

const FormContainer = styled.form`
  margin: 10px;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(to right, #0077b6, #48cae4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Input = styled.input`
  color: #808080;
  padding: 8px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  border: 1px solid transparent;
  background: #f7f7f7;
  cursor: pointer;

  &:hover {
    border: 1px solid #03045e;
  }

  &:focus {
    color: #03045e;
    outline: none;
    background-color: #f7f7f7;
  }
`;

const Select = styled.select`
  color: #808080;
  padding: 8px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  border: 1px solid transparent;
  background: #f7f7f7;
  width: 48%;
  cursor: pointer;
`;

const Button = styled.button`
  border-radius: 5px;
  background: var(--03045-e, #023e8a);
  color: white;
  font-weight: 600;
  padding: 10px 25px 10px 25px;
  cursor: pointer;
  border: none;
  margin-top: 30px;

  &:hover {
    background-color: #03045e;
  }
`;

const Action = ({ isOpen, onClose, rowData }) => {
  const [formValues, setFormValues] = useState({
    referenceNumber: "",
    fullName: "",
    phoneNumber: "",
    dateAccepted: "",
    estimatedCompletion: "",
    toolUnderRepair: "",
    assignedRepairman: "",
    status: "",
    progress: "",
  });

  useEffect(() => {
    if (isOpen && rowData) {
      const {
        RefNumber,
        CustomerName,
        ContactNo,
        DateAccepted,
        EtaCompletion,
        ToolUnderRepair,
        RepairmanName,
        OrderStatus,
        OrderProgress,
      } = rowData;
  
      setFormValues({
        ...formValues,
        referenceNumber: RefNumber || "",
        fullName: CustomerName || "",
        phoneNumber: ContactNo || "",
        dateAccepted: DateAccepted ? formatDate(DateAccepted) : "",
        estimatedCompletion: EtaCompletion ? formatDate(EtaCompletion) : "",
        toolUnderRepair: ToolUnderRepair || "",
        assignedRepairman: RepairmanName || "",
        status: OrderStatus || "",
        progress: OrderProgress || "",
      });
    }
  }, [isOpen, rowData]);
  
  // Helper function to format the date as "mm/dd/yyyy"
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const {
      referenceNumber,
      fullName,
      phoneNumber,
      dateAccepted,
      estimatedCompletion,
      toolUnderRepair,
      assignedRepairman,
      status,
      progress,
    } = formValues;

    try {
      const response = await fetch("/api/updateRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          referenceNumber,
          fullName,
          phoneNumber,
          dateAccepted: new Date(dateAccepted).toISOString(),
          estimatedCompletion: new Date(estimatedCompletion).toISOString(),
          toolUnderRepair,
          assignedRepairman,
          status,
          progress,
        }),
      });

      if (response.ok) {
        const updatedOrder = await response.json();
        console.log("Order updated:", updatedOrder);
        onClose();
      } else {
        console.error("Error updating order:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    // Convert ISO format date to desired format
    const formattedValue =
      name === "dateAccepted" || name === "estimatedCompletion"
        ? new Date(value).toLocaleDateString("en-GB")
        : value;
  
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: formattedValue,
    }));
  };

  if (!isOpen) return null;

  return (
    <Wrapper>
      <Container>
        <Close>
          <Icon onClick={onClose} icon="mingcute:close-line" color="#03045e" />
        </Close>

        <FormContainer onSubmit={handleFormSubmit}>
          <FormTitle>Repair Request Form</FormTitle>
          <InputWrapper style={{ marginTop: "30px !important" }}>
            <Input
              type="number"
              placeholder="Reference Number"
              name="referenceNumber"
              value={formValues.referenceNumber}
              readOnly
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formValues.fullName}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <h5 style={{ margin: "0px", fontWeight: "500" }}>Date accepted</h5>
            <Input
              type="date"
              placeholder="Date"
              name="dateAccepted"
              value={formValues.dateAccepted}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <h5 style={{ margin: "0px", fontWeight: "500" }}>
              Estimated completion
            </h5>
            <Input
              type="date"
              placeholder="Date"
              name="estimatedCompletion"
              value={formValues.estimatedCompletion}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Tool under repair"
              name="toolUnderRepair"
              value={formValues.toolUnderRepair}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Assigned repairman"
              name="assignedRepairman"
              value={formValues.assignedRepairman}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Select
              name="status"
              value={formValues.status}
              onChange={handleInputChange}
            >
              <option readOnly>Status</option>
              <option style={{ color: "#5EBF7F" }}>Finished</option>
              <option style={{ color: "#71C4D7" }}>On-going</option>
              <option style={{ color: "#C85D63" }}>Due</option>
            </Select>
            <Select
              name="progress"
              value={formValues.progress}
              onChange={handleInputChange}
            >
              <option readOnly>Progress</option>
              <option>100%</option>
              <option>75%</option>
              <option>50%</option>
              <option>25%</option>
              <option>10%</option>
            </Select>
          </InputWrapper>
          <Button type="submit">SAVE CHANGES</Button>
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default Action;
