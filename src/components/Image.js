import React from "react";
import styled from "styled-components";

const Img = styled.img`
  height: ${(props) => props.height};
  pointer-events: ${(props) => props.pointerEvents};
`;

function Image() {
  return <Img {...props}></Img>;
}

export default Image;
