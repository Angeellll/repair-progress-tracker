import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Card from "@/Components/Client/Info/Progress/Card";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  margin-top: 15px;

  &:hover {
    background-color: #03045e;
  }
`;

const Button1 = styled.button`
  border-radius: 5px;
  background-color: transparent;
  color: var(--03045-e, #023e8a);
  font-weight: 600;
  padding: 10px 25px 10px 25px;
  cursor: pointer;
  border: none;
  margin-top: 15px;
  margin-right: 20px;

  &:hover {
    background: var(--03045-e, #a30015);
    color: white;
  }
`;

const Action = ({ isOpen, onClose, rowData }) => {
  const [formValues, setFormValues] = useState({
    appointmentID: "",
    clientName: "",
    intent: "",
    date: "",
    setDate: "",
    appointmentStatus: "",
  });

  useEffect(() => {
    if (isOpen && rowData) {
      const { AppointmentID, ClientName, Intent, Date, SetDate, AppointmentStatus } =
        rowData;

      setFormValues({
        ...formValues,
        appointmentID: AppointmentID || "",
        clientName: ClientName || "",
        intent: Intent || "",
        date: Date ? formatDate(Date) : "",
        setDate: SetDate ? formatDate(SetDate) : "",
        appointmentStatus: AppointmentStatus || "",
      });
    }
  }, [isOpen, rowData]);

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const { appointmentID, clientName, intent, date, setDate, appointmentStatus } =
      formValues;

    try {
      const response = await fetch("/api/updateAppointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appointmentID,
          clientName,
          intent,
          date: new Date(date).toISOString(),
          setDate: new Date(setDate).toISOString(),
          appointmentStatus,
        }),
      });

      if (response.ok) {
        const updateAppointment = await response.json();
        console.log("Appointment updated:", updateAppointment);
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

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `/api/appointmentDelete?appointmentID=${formValues.appointmentID}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        toast.success("Order deleted successfully!");
        onClose();
      } else {
        const data = await response.json();
        console.error("Error deleting order:", data.error);
        toast.error(data.error);
      }
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  if (!isOpen) return null;

  return (
    <Wrapper>
      <Container>
        <Close>
          <Icon onClick={onClose} icon="mingcute:close-line" color="#03045e" />
        </Close>

        <FormContainer onSubmit={handleFormSubmit}>
          <FormTitle>Appointment Form</FormTitle>
          <InputWrapper style={{ marginTop: "30px !important" }}>
            <Input
              type="number"
              placeholder="Appointment ID"
              name="appointmentID"
              value={formValues.appointmentID}
              readOnly
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Client Name"
              name="clientName"
              value={formValues.clientName}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Select
              name="intent"
              value={formValues.intent}
              onChange={handleInputChange}
              style={{ width: "100%" }}
            >
              <option style={{ backgroundColor: "#D3D3D3" }} readOnly>
                Intent
              </option>
              <option>Repair Service</option>
              <option>Follow Ups</option>
              <option>Other Concerns</option>
            </Select>
          </InputWrapper>
          <InputWrapper>
            <h5 style={{ margin: "0px", fontWeight: "500" }}>Date Requested</h5>
            <Input
              type="date"
              placeholder="Date"
              name="date"
              value={formValues.date}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <h5 style={{ margin: "0px", fontWeight: "500" }}>
              Set Appointment Date
            </h5>
            <Input
              type="date"
              placeholder="Date"
              name="setDate"
              value={formValues.setDate}
              onChange={handleInputChange}
            />
          </InputWrapper>

          <InputWrapper>
            <Select
              name="appointmentStatus"
              value={formValues.appointmentStatus}
              onChange={handleInputChange}
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <option style={{ backgroundColor: "#D3D3D3" }} readOnly>
                Status
              </option>
              <option style={{ color: "#5EBF7F" }}>Approved</option>
              <option style={{ color: "#71C4D7" }}>Pending</option>
              <option style={{ color: "#C85D63" }}>Declined</option>
            </Select>
          </InputWrapper>

          <div
            style={{
              display: "flex",
            }}
          >
            <Button1 type="button" onClick={handleDelete}>
              DELETE
            </Button1>
            <Button type="submit">SAVE CHANGES</Button>
          </div>
        </FormContainer>
      </Container>
      <ToastContainer />
    </Wrapper>
  );
};

export default Action;
