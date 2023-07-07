import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background: linear-gradient(286.24deg, #48cae4 11.28%, #03045e 83.61%);
  border-radius: 49px;
  border: none;
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  padding: 8px 20px 8px 20px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(286.24deg, #03045e 11.28%, #48cae4 83.61%);
  }
`;

function More() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Wrapper>
      {!isClicked && (
        <Button onClick={handleClick}>
          See more
          <Icon
            style={{ margin: "-8px", marginLeft: "5px" }}
            icon="mingcute:arrow-right-fill"
            width="28"
            height="28"
          />
        </Button>
      )}
      {isClicked && (
        <div>
          <h5
          style={{fontStyle: "italic", fontWeight: "400", marginLeft: "20px"}
        }
          >You must <a href="/SignIn" style={{fontStyle: "italic", fontWeight: "500"}}>sign in</a> first. </h5>
        </div>
      )}
    </Wrapper>
  );
}

export default More;
