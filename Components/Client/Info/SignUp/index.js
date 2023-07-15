import React, { useState } from "react";
import Background from "@/Components/Client/Utils/Background";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 60%;
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
  width: 50%;
  margin-top: -20px;

  &:hover {
    background-color: #03045e;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const InputInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

const InputTitle = styled.h5`
  margin: 0px;
  margin-bottom: 5px;
`;

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password and confirm password do not match!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Sign up successful");

        // Show success notification
        toast.success("Sign up successful!", {
          position: toast.POSITION.TOP_RIGHT,
        });

        // Redirect to a success page or any other desired route
        // router.push("/success");
      } else {
        console.error("Error creating customer:", response.status);

        // Show error notification
        toast.error("An error occurred. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error creating customer:", error);

      // Show error notification
      toast.error("An error occurred. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Background>
      <Wrapper>
        <FormContainer>
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
                Sign Up
              </h1>
            </div>
          </div>

          <InputWrapper>
            <InputContainer>
              <InputInnerWrapper>
                <InputTitle>FIRST NAME</InputTitle>
                <Input
                  type="text"
                  name="firstName"
                  onChange={handleInputChange}
                />
              </InputInnerWrapper>
              <InputInnerWrapper>
                <InputTitle>LAST NAME</InputTitle>
                <Input
                  type="text"
                  name="lastName"
                  onChange={handleInputChange}
                />
              </InputInnerWrapper>
            </InputContainer>
            <InputContainer>
              <InputInnerWrapper>
                <InputTitle>EMAIL</InputTitle>
                <Input type="email" name="email" onChange={handleInputChange} />
              </InputInnerWrapper>
              <InputInnerWrapper>
                <InputTitle>PHONE NUMBER</InputTitle>
                <Input
                  type="number"
                  pattern="[0-9]{11}"
                  name="phoneNumber"
                  onChange={handleInputChange}
                />
              </InputInnerWrapper>
            </InputContainer>

            <InputContainer>
              <InputInnerWrapper>
                <InputTitle>PASSWORD</InputTitle>
                <Input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                />
              </InputInnerWrapper>
              <InputInnerWrapper>
                <InputTitle>CONFIRM PASSWORD</InputTitle>
                <Input
                  type="password"
                  name="confirmPassword"
                  onChange={handleInputChange}
                />
              </InputInnerWrapper>
            </InputContainer>
          </InputWrapper>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleSubmit}>CREATE ACCOUNT</Button>
          </div>

          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <h5
              style={{ fontStyle: "italic", fontWeight: "400", margin: "0px" }}
            >
              Already have an account?{" "}
              <a
                href="/SignIn"
                style={{
                  fontStyle: "italic",
                  fontWeight: "500",
                  margin: "0px",
                }}
              >
                Sign in
              </a>
            </h5>
          </div>

          {/* Toast container */}
          <ToastContainer />
        </FormContainer>
      </Wrapper>
    </Background>
  );
}
