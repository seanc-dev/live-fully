import React from "react";
import styled from "@emotion/styled";

import logo from "../assets/logo-white.svg";

const Logo = styled.img`
  height: 60 vmin;
  pointer-events: none;
`;

const Header = styled.header`
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  // color: white;
`;

const Home = () => {
  return (
    <div>
      <Header className="Home-header">
        <Logo src={logo} alt="logo" />
        <p>This site is under construction, please check back later</p>
      </Header>
    </div>
  );
};

export default Home;
