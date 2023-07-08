import React from "react";
import Background from "@/Components/Client/Utils/Background";
import styled from "styled-components";
import { useRouter } from "next/router";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export default function index() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/Progress");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
                Sign In
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
                EMAIL
              </h5>
              <Input type="email" />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h5
                style={{
                  margin: "0px",
                  marginBottom: "5px",
                }}
              >
                PASSWORD
              </h5>
              <Input type="password" />
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button onClick={handleButtonClick}>SIGN IN</Button>
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
              Don't have an account?{" "}
              <a
                href="/SignUp"
                style={{
                  fontStyle: "italic",
                  fontWeight: "500",
                  margin: "0px",
                }}
              >
                Sign Up
              </a>
            </h5>
          </div>
        </FormContainer>
      </Wrapper>
    </Background>
  );
}
