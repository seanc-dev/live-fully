import React from "react";
import styled from "styled-components";
import { TextBox } from "../components/utils.tsx";
// import Image from "../components/Image.js";
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

function Home() {
  return (
    <div>
      <Header className="Home-header">
        <Logo src={logo} alt="logo" />
        {/* <Image height="60vmin" src={logo} alt="logo" pointerEvents="none" /> */}
        <TextBox>
          This site is under construction, please check back later
        </TextBox>
      </Header>
    </div>
  );
}

export default Home;
