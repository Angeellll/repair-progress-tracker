import React, { useState, useEffect } from "react";
import Background from "@/Components/Client/Utils/Background";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const API_BASE_URL = "/api/checkReferenceNumber";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  justify-content: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Input = styled.input.attrs({
  type: "text",
})`
  border: 2px solid rgba(3, 4, 94, 0.5);
  border-radius: 3px;
  font-family: "Quicksand";
  color: rgba(3, 4, 94, 0.5);
  font-size: 18px;
  padding: 5px 10px 5px 15px;
  display: flex;

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
  width: 40%;
  background: #023e8a;
  border-radius: 2px;
  color: #ffffff;
  font-family: "Quicksand";
  font-size: 18px;
  padding: 5px 10px 5px 15px;
  border: none;
  margin-top: 30px;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #03045e;
  }
`;

export default function LandingPage() {
  const router = useRouter();
  const [referenceNumber, setReferenceNumber] = useState("");

  useEffect(() => {
    // Clear "referenceNumber" from cache when component mounts
    try {
      localStorage.removeItem("referenceNumber");
    } catch (error) {
      console.error("Error deleting reference number from cache:", error);
    }

    // Cleanup: Clear "referenceNumber" from cache when component unmounts
    return () => {
      try {
        localStorage.removeItem("referenceNumber");
      } catch (error) {
        console.error("Error deleting reference number from cache:", error);
      }
    };
  }, []);

  const handleButtonClick = async () => {
    try {
      // Check if the reference number exists in the Order model
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ referenceNumber }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.exists) {
          // If the reference number exists in the database, navigate to the reference page
          router.push(`/Reference?refNumber=${referenceNumber}`);
        } else {
          // Handle the case when the reference number does not exist and show a toast notification
          toast.error("Reference number does not exist in the database.");
        }
      } else {
        // Handle non-200 status codes
        toast.error("Incorrect reference number. Please try again.");
      }
    } catch (error) {
      console.error("Error checking reference number in the database:", error);
      // Show a toast notification for the error
      toast.error("An error occurred while checking the reference number.");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setReferenceNumber(e.target.value);
  };

  return (
    <Background>
      <Wrapper>
        <h2 style={{ marginTop: "-110px", fontSize: "40px", lineHeight: "50px" }}>
          Welcome to <br />
          Connection Power Tools
        </h2>
        <h4 style={{ marginTop: "-25px", fontSize: "25px" }}>
          Your trusted destination for connection power tool repairs.
        </h4>

        <form onSubmit={handleSubmit}>
          <FormContainer>
            <Input
              type="text"
              placeholder="Enter reference number"
              value={referenceNumber}
              onChange={handleInputChange}
              required
            />
            <div style={{ display: "flex", justifyContent: "start" }}>
              <Button onClick={handleButtonClick}>CHECK PROGRESS</Button>
            </div>
          </FormContainer>
        </form>
        <ToastContainer />
      </Wrapper>
    </Background>
  );
}