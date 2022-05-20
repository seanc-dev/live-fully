import React from "react";
import styled from "styled-components";
import { TextBox } from "../components/utils.tsx";
import logo from "../assets/logo-512.svg";

const Logo = styled.img`
  height: 60 vmin;
  pointer-events: none;
`;

const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Home: React.FC = () => {
  return (
    <Header className="Home-header">
      <Logo src={logo} alt="logo" />
      <TextBox>
        This site is under construction, please check back later
      </TextBox>
    </Header>
  );
};

export default Home;
