import React, { useState, useEffect } from "react";
import Background from "@/Components/Client/Utils/SignBG";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Back from "../../Info/Progress/Back";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 30%;
  height: 70%;
  border: 1px #b7b7b7 solid;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 50px 30px 50px 30px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 2px solid rgba(3, 4, 94, 0.5);
  cursor: pointer;

  &:hover {
    border: 2px solid #03045e;
  }

  &:focus {
    color: #03045e;
    outline: none;
    background-color: white;
  }
`;

const Button = styled.button`
  border-radius: 5px;
  background: var(--03045-e, #023e8a);
  color: white;
  padding: 5px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #03045e;
  }
`;

const Button1 = styled.button`
  border-radius: 5px;
  background: transparent;
  color: black;
  padding: 5px;
  cursor: pointer;
  border: none;
  margin-top: 5px;

  &:hover {
    background: var(--03045-e, #023e8a);
    color: white;
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
  border: 2px solid rgba(3, 4, 94, 0.5);
  cursor: pointer;
`;

const ViewContainer = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  padding: 50px 30px 50px 30px;
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
  font-size: 13px;
  border-bottom: solid 1px gray;
`;

const S = styled.span`
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

export default function SignIn() {
  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    fullName: "",
    intent: "",
    setDate: getFormattedDate(new Date()),
  });
  const [appointments, setAppointments] = useState([]);

  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/Progress");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/setAppointment", {
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
          intent: "",
          setDate: getFormattedDate(new Date()),
        });

        // Show success notification
        toast.success("Request appointment successfully!");

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
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
    <Background>
      <Wrapper>
        <FormContainer onSubmit={handleSubmit}>
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <div>
              <h1
                style={{
                  margin: "0px",
                }}
              >
                Appointment
              </h1>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",

              marginBottom: "30px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "30px",
              }}
            >
              <h5
                style={{
                  margin: "0px",
                  marginBottom: "5px",
                }}
              >
                Full Name
              </h5>
              <Input
                type="text"
                value={formData.fullName}
                name="fullName"
                onChange={handleInputChange}
              />
            </div>
            <h5
              style={{
                margin: "0px",
                marginBottom: "5px",
                marginTop: "-20px",
              }}
            >
              Purpose
            </h5>
            <Select
              name="intent"
              value={formData.intent}
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
            <h5 style={{ margin: "0px", marginTop: "10px", fontWeight: "500" }}>
              Set Appointment Date
            </h5>
            <Input
              type="date"
              placeholder="Date"
              name="setDate"
              value={formData.setDate}
              onChange={handleInputChange}
            />
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button type="submit">SET APPOINTMENT</Button>
            <Button1 type="button" onClick={handleButtonClick}>
              Back
            </Button1>
          </div>

          {/* Toast container */}
          <ToastContainer />
        </FormContainer>
        <ViewContainer>
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <div>
              <h3
                style={{
                  margin: "0px",
                  fontWeight: "600",
                }}
              >
                <i>Appointment Request Status</i>
              </h3>
            </div>
          </div>
          <Container1>
            {appointments.map((appointment) => (
              <>
                <P>
                  <i>
                    Date Requested: {formatDate(appointment.Date)} Purpose:{" "}
                    {appointment.Intent} Status:{" "}
                    <S status={appointment.AppointmentStatus}>
                      {appointment.AppointmentStatus}
                    </S>
                  </i>
                </P>
              </>
            ))}
          </Container1>
        </ViewContainer>
      </Wrapper>
    </Background>
  );
}
