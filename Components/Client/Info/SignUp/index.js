import React from "react";
import Background from "@/Components/Client/Utils/Background";
import styled from "styled-components";

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

export default function index() {
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
                <Input type="text" />
              </InputInnerWrapper>
              <InputInnerWrapper>
                <InputTitle>LAST NAME</InputTitle>
                <Input type="text" />
              </InputInnerWrapper>
            </InputContainer>
            <InputContainer>
              <InputInnerWrapper>
                <InputTitle>EMAIL</InputTitle>
                <Input type="email" />
              </InputInnerWrapper>
              <InputInnerWrapper>
                <InputTitle>PHONE NUMBER</InputTitle>
                <Input type="number" pattern="[0-9]{11}"/>
              </InputInnerWrapper>
            </InputContainer>

            <InputContainer>
              <InputInnerWrapper>
                <InputTitle>PASSWORD</InputTitle>
                <Input type="text" />
              </InputInnerWrapper>
              <InputInnerWrapper>
                <InputTitle>CONFIRM PASSWORD</InputTitle>
                <Input type="text" />
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
            <Button>SIGN UP</Button>
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
        </FormContainer>
      </Wrapper>
    </Background>
  );
}
