import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  width: 25%;
  height: 70%;
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

const AddRequest = ({ isOpen, onClose }) => {

  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    dateAccepted: getFormattedDate(new Date()),
    etaCompletion: getFormattedDate(new Date()),
    toolUnderRepair: "",
    assignedRepairman: "",
    status: "",
    progress: "",
    payment: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form
        setFormData({
          fullName: "",
          phoneNumber: "",
          dateAccepted: "",
          etaCompletion: "",
          toolUnderRepair: "",
          assignedRepairman: "",
          status: "",
          progress: "",
          payment: "",
        });

        // Show success notification
        toast.success("Order created successfully!");

        // Close the modal
        onClose();
      } else {
        const data = await response.json();
        console.error("Error creating order:", data.error);

        // Show error notification
        toast.error(data.error);
      }
    } catch (error) {
      console.error("Error creating order:", error);

      // Show error notification
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <Wrapper>
      <Container>
        <Close>
          <Icon onClick={onClose} icon="mingcute:close-line" color="#03045e" />
        </Close>

        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>Repair Request Form</FormTitle>
          <InputWrapper style={{ marginTop: "30px !important" }}>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
            />
          </InputWrapper>
          <InputWrapper>
            <h5 style={{ margin: "0px", fontWeight: "500" }}>Date accepted</h5>
            <Input
              type="date"
              name="dateAccepted"
              value={formData.dateAccepted}
              onChange={handleInputChange}
              placeholder="Date Accepted"
            />
          </InputWrapper>
          <InputWrapper>
            <h5 style={{ margin: "0px", fontWeight: "500" }}>
              Estimated completion
            </h5>
            <Input
              type="date"
              name="etaCompletion"
              value={formData.etaCompletion}
              onChange={handleInputChange}
              placeholder="Estimated Completion"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              name="toolUnderRepair"
              value={formData.toolUnderRepair}
              onChange={handleInputChange}
              placeholder="Tool under Repair"
            />
          </InputWrapper>
          <InputWrapper>
            <Select
              name="assignedRepairman"
              value={formData.assignedRepairman}
              onChange={handleInputChange}
              style={{ width: "100%" }}
            >
              <option style={{ backgroundColor: "#D3D3D3" }}>
                Assigned Repairman
              </option>
              <option>Jeth Newton</option>
              <option>Jasper Testyn</option>
              <option>Jhaslyn Lovelace</option>
            </Select>
          </InputWrapper>
          <InputWrapper
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option>Status</option>
              <option style={{ color: "#5EBF7F" }}>Finished</option>
              <option style={{ color: "#71C4D7" }}>On-going</option>
              <option style={{ color: "#C85D63" }}>Due</option>
            </Select>
            <Select
              name="progress"
              value={formData.progress}
              onChange={handleInputChange}
            >
              <option>Progress</option>
              <option>100%</option>
              <option>75%</option>
              <option>50%</option>
              <option>25%</option>
              <option>10%</option>
            </Select>
          </InputWrapper>
          <InputWrapper>
            <Select
              name="payment"
              value={formData.payment}
              onChange={handleInputChange}
              style={{ width: "100%" }}
            >
              <option>Payment</option>
              <option style={{ color: "#5EBF7F" }}>Fully Paid</option>
              <option style={{ color: "#71C4D7" }}>Downpayment</option>
              <option style={{ color: "#C85D63" }}>Unpaid</option>
            </Select>
          </InputWrapper>

          <Button type="submit">CONFIRM REQUEST</Button>
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default AddRequest;
