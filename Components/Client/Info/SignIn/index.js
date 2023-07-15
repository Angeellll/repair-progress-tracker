import React, {useState} from "react";
import Background from "@/Components/Client/Utils/Background";
import styled from "styled-components";
import { useRouter } from "next/router";
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

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Sign in successful");

        // Show success notification
        toast.success("Sign in successful!");

        // Redirect to the desired route
        // router.push("/dashboard");
        router.push("/Progress");
      } else {
        const data = await response.json();
        console.error("Error signing in:", data.error);

        // Show error notification
        toast.error(data.error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error signing in:", error);

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
              <Input type="email" name="email" onChange={handleInputChange} />
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
              <Input type="password" name="password" onChange={handleInputChange} />
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button type="submit">SIGN IN</Button>
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
          {/* Toast container */}
          <ToastContainer />
        </FormContainer>
      </Wrapper>
    </Background>
  );
}
