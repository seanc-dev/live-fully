import React from "react";
import logo from "../logo.svg";
import "./styles/Home.css";

function Home() {
  return (
    <div>
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>This site is under construction, please check back later</p>
      </header>
    </div>
  );
}

export default Home;
