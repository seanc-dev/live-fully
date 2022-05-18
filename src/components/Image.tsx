import React from "react";
import styled from "styled-components";

interface ImageProps {
  readonly height?: string;
  readonly pointerEvents?: string;
}

const Img = styled.img<ImageProps>`
  height: ${(props) => props.height};
  pointer-events: ${(props) => props.pointerEvents};
`;

const Image: React.FC<ImageProps> = (props) => {
  return <Img {...props}></Img>;
};

export default Image;
