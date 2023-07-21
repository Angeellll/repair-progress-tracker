import React, { useState, useEffect } from "react";
import Background from "@/Components/Client/Utils/Background";
import styled from "styled-components";
import { useRouter } from "next/router";

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

  const handleButtonClick = () => {
    router.push(`/Reference?refNumber=${referenceNumber}`);
  };

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
      </Wrapper>
    </Background>
  );
}