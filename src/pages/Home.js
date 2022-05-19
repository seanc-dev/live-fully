import React from "react";
import styled from "styled-components";

// import Image from "../components/Image.js";
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

function Home() {
  return (
    <div>
      <Header className="Home-header">
        <Logo src={logo} alt="logo" />
        {/* <Image height="60vmin" src={logo} alt="logo" pointerEvents="none" /> */}
        <p>This site is under construction, please check back later</p>
      </Header>
    </div>
  );
}

export default Home;
