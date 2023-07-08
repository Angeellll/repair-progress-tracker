import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const MainWrapper = styled.div`
  background-color: white;
  margin-top: -40px;
`;

const Title = styled.h1`
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 18px;
  color: #0077b6;
  margin-left: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 150px;
`;

const YWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const XWrapper = styled.span`
  position: absolute;
  margin-top: 80px;
`;

const Ic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: #03045e;
  color: white;
  margin-top: -4px;
`;

const STitle = styled.h1`
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ percent }) => (percent ? "#03045e" : "#ffffff")};
  border: #caf0f8 5px solid;
  box-shadow: inset 0px 3.79776px 3.79776px rgba(0, 0, 0, 0.25);
`;

const Line = styled.div`
  width: 70px;
  height: 5px;
  background-color: #03045e;
`;

function Progress() {
  const percent = 89;

  return (
    <MainWrapper>
      <Title>Progress</Title>
      <Wrapper>
        {/* 10% */}
        <YWrapper>
          <Circle percent={percent > 10}>
            {percent > 10 && (
              <Icon icon="uil:check" color="white" width="20" height="20" />
            )}
          </Circle>
          {percent > 10 && (
            <XWrapper>
              <Ic>
                <Icon
                  icon="eva:arrow-up-fill"
                  color="#03045e"
                  width="20"
                  height="20"
                />
              </Ic>
              <Status>
                <STitle>Received</STitle>
              </Status>
            </XWrapper>
          )}
        </YWrapper>
        <Line />

        {/* 25% */}
        <YWrapper>
          <Circle percent={percent > 25}>
            {percent > 25 && (
              <Icon icon="uil:check" color="white" width="20" height="20" />
            )}
          </Circle>
          {percent > 25 && (
            <XWrapper>
              <Ic>
                <Icon
                  icon="eva:arrow-up-fill"
                  color="#03045e"
                  width="20"
                  height="20"
                />
              </Ic>
              <Status>
                <STitle>Awaiting Parts</STitle>
              </Status>
            </XWrapper>
          )}
        </YWrapper>
        <Line />
        {/* 50% */}
        <YWrapper>
          <Circle percent={percent > 25}>
            {percent > 25 && (
              <Icon icon="uil:check" color="white" width="20" height="20" />
            )}
          </Circle>
          {percent > 25 && (
            <XWrapper>
              <Ic>
                <Icon
                  icon="eva:arrow-up-fill"
                  color="#03045e"
                  width="20"
                  height="20"
                />
              </Ic>
              <Status>
                <STitle>In Progress</STitle>
              </Status>
            </XWrapper>
          )}
        </YWrapper>
        <Line />
        {/* 75% */}
        <YWrapper>
          <Circle percent={percent > 25}>
            {percent > 25 && (
              <Icon icon="uil:check" color="white" width="20" height="20" />
            )}
          </Circle>
          {percent > 25 && (
            <XWrapper>
              <Ic>
                <Icon
                  icon="eva:arrow-up-fill"
                  color="#03045e"
                  width="20"
                  height="20"
                />
              </Ic>
              <Status>
                <STitle>Finalizing</STitle>
              </Status>
            </XWrapper>
          )}
        </YWrapper>
        <Line />
        {/* 100% */}
        <YWrapper>
          <Circle percent={percent > 25}>
            {percent > 25 && (
              <Icon icon="uil:check" color="white" width="20" height="20" />
            )}
          </Circle>
          {percent > 25 && (
            <XWrapper>
              <Ic>
                <Icon
                  icon="eva:arrow-up-fill"
                  color="#03045e"
                  width="20"
                  height="20"
                />
              </Ic>
              <Status>
                <STitle>Done</STitle>
              </Status>
            </XWrapper>
          )}
        </YWrapper>
      </Wrapper>
    </MainWrapper>
  );
}

export default Progress;
