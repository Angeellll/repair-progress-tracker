import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { toast, ToastContainer } from "react-toastify";
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

export default function OrderForm({ isOpen, onClose }) {
  const [orderData, setOrderData] = useState({
    fullName: "",
    phoneNumber: "",
    dataAccepted: "",
    estimatedCompletion: "",
    toolUnderRepair: "",
    assignedRepairman: "",
    status: "",
    progress: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Order Data:", orderData); 

    try {
      const response = await fetch("/api/reqOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log("Order placed successfully");

        // Show success notification
        toast.success("Order placed successfully!", {
          position: toast.POSITION.TOP_RIGHT, 
        });

        // Redirect to a success page or any other desired route
        // router.push("/success");
      } else {
        console.error("Error placing order:", response.status);

        // Show error notification
        toast.error("An error occurred. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error placing order:", error);

      // Show error notification
      toast.error("An error occurred. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("Order Data:", orderData)
  };

  if (!isOpen) return null;

  return (
    <Wrapper>
      <Container>
        <Close>
          <Icon onClick={onClose} icon="mingcute:close-line" color="#03045e" />
        </Close>

        <FormContainer>
          <FormTitle>Repair Request Form</FormTitle>
          <InputWrapper style={{ marginTop: "30px !important" }}>
            <Input
              type="text"
              name="referenceNumber"
              placeholder="Reference Number"
              readOnly
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <h5 style={{ margin: "0px", fontWeight: "500" }}>
              Data accepted
            </h5>
            <Input
              type="date"
              name="dataAccepted"
              placeholder="Date"
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <h5 style={{ margin: "0px", fontWeight: "500" }}>
              Estimated completion
            </h5>
            <Input
              type="date"
              name="estimatedCompletion"
              placeholder="Date"
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              name="toolUnderRepair"
              placeholder="Tool under repair"
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              name="assignedRepairman"
              placeholder="Assigned repairman"
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Select name="status" onChange={handleInputChange}>
              <option readOnly>Status</option>
              <option style={{ color: "#5EBF7F" }}>Finished</option>
              <option style={{ color: "#71C4D7" }}>On-going</option>
              <option style={{ color: "#C85D63" }}>Due</option>
            </Select>
            <Select name="progress" onChange={handleInputChange}>
              <option readOnly>Progress</option>
              <option>100%</option>
              <option>75%</option>
              <option>50%</option>
              <option>25%</option>
              <option>10%</option>
            </Select>
          </InputWrapper>
          <Button onClick={handleSubmit}>CONFIRM REQUEST</Button>
        </FormContainer>
      </Container>
      <ToastContainer />
    </Wrapper>
  );
}
