import React, { useEffect } from "react";
import styled from "@emotion/styled";
import postscribe from "postscribe";
import FBFooter from "../components/FBFooter.tsx";

import theme from "../theme/theme.tsx";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  iframe {
    border-radius: 0 !important;
  }
`;

const ColouredContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #004f73;
`;

export default function TPSurvey() {
  useEffect(() => {
    postscribe(
      "#wrapper",
      "<script src='//embed.typeform.com/next/embed.js'></script>"
    );
  });

  return (
    <ColouredContainer>
      <Container
        id="wrapper"
        data-tf-widget="LjX9FL18"
        data-tf-inline-on-mobile
        data-tf-medium="snippet"
      ></Container>
      <FBFooter bgColor={theme.colors.tfBackground} textColor="white" />
    </ColouredContainer>
  );
}
