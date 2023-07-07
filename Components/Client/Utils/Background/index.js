/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Wrapper = styled.div`
  background: linear-gradient(
    121.22deg,
    #ffffff -7.18%,
    #0096c7 42.13%,
    #03045e 87.74%
  );
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 10px;
  grid-row-gap: 0;
  border-radius: 10px;
`;

const LogoContainer = styled.div`
  grid-row: 1;
  height: 100px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const LogoTitle = styled.h1`
  font-family: Work Sans;
  background: linear-gradient(
    121.22deg,
    #0096c7 -7.18%,
    #0077b6 42.13%,
    #03045e 87.74%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Content = styled.div`
  grid-row: 2;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

const Footer = styled.div`
  grid-row: 3;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-evenly;
  flex-direction: row;
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const A = styled.a`
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default function index({ children }) {
  return (
    <Wrapper>
      <Container>
        <LogoContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              
            }}
          >
            <a href="/">
              <img width="100" height="100" src="logo.png" />
            </a>
            <LogoTitle>CONNECTION POWER TOOLS</LogoTitle>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              
            }}
          >
            <div style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              
            }}>
              <A href="/">Home</A>
              <A  href="/SignIn">Sign In</A>
              <A href="/">FAQ</A>
            </div>
          </div>
        </LogoContainer>
        <Content>{children}</Content>
        <Footer>
          <FooterWrapper>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "5px",
              }}
            >
              <Icon icon="mdi:telephone" width="20" />
            </div>
            <div>09123456789</div>
          </FooterWrapper>
          <FooterWrapper>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "5px",
              }}
            >
              <Icon icon="dashicons:email-alt" width="20" />
            </div>
            <div>cpt@gmail.com</div>
          </FooterWrapper>
          <FooterWrapper>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "5px",
              }}
            >
              <Icon icon="ic:baseline-facebook" width="20" />
            </div>
            <div>Connection Power Tools</div>
          </FooterWrapper>

          <FooterWrapper>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "5px",
              }}
            >
              <Icon icon="mdi:address-marker" width="20" />
            </div>
            <div>Silang, Cavite chuhchcuhcuchuchuchuchucu</div>
          </FooterWrapper>
        </Footer>
      </Container>
    </Wrapper>
  );
}
