import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #023e8a;
  border-radius: 2px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  height: 30px;
  margin: auto;
  width: 100px;
  
  cursor: pointer;

  &:hover {
    background: #6b8db9;
  }

`;

const Ic = styled.div`
  position: absolute;
  color: #ffffff;
  margin-top: 5px;
  cursor: pointer;
`;



function Back({children}) {
  const router = useRouter();

  const handleButtonClick = () => {
    // Delete "referenceNumber" from cache before navigating back
    try {
      localStorage.removeItem("referenceNumber");
    } catch (error) {
      console.error("Error deleting reference number from cache:", error);
    }
    // Navigate back to "/"
    router.push("/");
  };

  return (
    <Container onClick={handleButtonClick}>
      {/* <Ic>
        <Icon icon="ic:round-arrow-left" width="60" height="40" />
      </Ic> */}

      <Button>{children}</Button>
    </Container>
  );
}

export default Back;
