import React from "react";
import NavBar from "../components/NavBar.js";
import Container from "@mui/material/Container";

const NavContainer = (props) => {
  return (
    <Container>
      <NavBar />
      {props.children}
    </Container>
  );
};

export default NavContainer;
