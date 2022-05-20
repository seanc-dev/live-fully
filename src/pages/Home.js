import React from "react";
import styled from "styled-components";

import logo from "../assets/logo-white.svg";

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

const Home = () => {
  return (
    <Header>
      <Logo src={logo} alt="logo" />
      <p>This site is under construction, please check back later</p>
    </Header>
  );
};

export default Home;
