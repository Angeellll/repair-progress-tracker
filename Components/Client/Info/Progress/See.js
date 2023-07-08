import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Progress from "./Progress";

const Wrapper = styled.div`
  z-index: 1;
`;

const Button = styled.button`
  background: linear-gradient(286.24deg, #48cae4 11.28%, #03045e 83.61%);
  border-radius: 49px;
  border: none;
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  padding: 10px 25px 10px 25px;
  margin-left: 100px;
  margin-top: -10px;
  cursor: pointer;


  &:hover {
    background: linear-gradient(286.24deg, #03045e 11.28%, #48cae4 83.61%);
  }
`;

const Second = styled.div``;

function See() {
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
      {isClicked && <><Progress/></>
      
      }
    </Wrapper>
  );
}

export default See;
