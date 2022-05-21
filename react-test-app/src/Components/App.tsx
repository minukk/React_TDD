import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";

function App() {
  return (
    <Container>
      <Header>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  text-align: cetner;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #282c34 !important;
  font-size: calc(10px + 2vmin);
  color: #fff;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`;

export default App;
