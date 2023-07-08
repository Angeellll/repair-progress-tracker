import React from "react";
import styled from "styled-components";
import Back from "./Back";

const Wrapper = styled.div`
  position: relative;
  right: 225px;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Progress = styled.progress`
  width: 120px;
  height: 120px;
  border-radius: 50%;

  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(#0f2675 ${props => props.value}%, #3982b7 0);
  align-items: center;
  justify-content: center;
  appearance: none;
  position: relative;

  &::-webkit-progress-bar {
    background-color: transparent;
  }

  &::-webkit-progress-value {
    background-color: transparent;
  }

  &::-moz-progress-bar {
    background-color: transparent;
  }

  &::before {
    content: "${props => props.value}%";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Montserrat;
  }
`;

const ProgressBar = () => {
  const value = 32;

  return (
    <Wrapper>
      <Progress value={value} max={100} />
      <Back/>
    </Wrapper>
  );
};

export default ProgressBar;
