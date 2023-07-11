import React from "react";
import Background from "../Background";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
`
const QuestionContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`


function index() {
  return (
    <Background>
      <Wrapper>
        <TitleContainer>
          <h1>Frequently Asked Questions</h1>
        </TitleContainer>
        <QuestionContainer>
          <div>
            <h3>What's the location of your repair shop?</h3>
            <p>Purok 1, Lumil, Silang, Cavite</p>
          </div>
            
        </QuestionContainer>
      </Wrapper>
    </Background>
  );
}

export default index;
