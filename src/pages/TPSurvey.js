import React, { useEffect } from "react";
import styled from "styled-components";
import postscribe from "postscribe";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  iframe {
    border-radius: 0 !important;
  }
`;

export default function TPSurvey() {
  useEffect(() => {
    postscribe(
      "#wrapper",
      "<script src='//embed.typeform.com/next/embed.js'></script>"
    );
  });

  return (
    <Container
      id="wrapper"
      data-tf-widget="LjX9FL18"
      data-tf-inline-on-mobile
      data-tf-medium="snippet"
    ></Container>
  );
}
