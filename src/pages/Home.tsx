import React from "react";
import styled from "styled-components";
import { TextBlock } from "../components/utils.tsx";
import logo from "../assets/logo-512.svg";

const Logo = styled.img`
  height: 60 vmin;
  pointer-events: none;
`;

const Header = styled.header`
  transform: translate(0, -5vh);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home: React.FC = () => {
  return (
    <Header className="Home-header">
      <Logo src={logo} alt="logo" />
      <TextBlock>
        This site is under construction, please check back later
      </TextBlock>
    </Header>
  );
};

export default Home;
