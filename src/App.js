import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ReactPixel from "react-facebook-pixel";
import CookieConsent from "react-cookie-consent";

import Home from "./pages/Home.tsx";
import TPThankYou from "./pages/TPThankYou";
import TPSurvey from "./pages/TPSurvey";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NoMatch from "./pages/NoMatch";

import theme from "./theme/theme.tsx";

const advancedMatching = {};
const pixelOptions = {
  autoConfig: true,
  debug: false,
};

const Container = styled.div`
  ${(props) => !props.isLoaded && `display: none;`}
  height: 100%;
  background-color: #004f73;
`;

const Link = styled.a`
  color: white;
  text-decoration: underline;
`;

const onAccept = () => {
  ReactPixel.init("372355894928688", advancedMatching, pixelOptions);
  ReactPixel.grantConsent();
  ReactPixel.pageView();
};

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    const acceptsCookies = document.cookie.replace(
      /(?:(?:^|.*;\s*)user-accepts-cookies\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    ReactPixel.init("372355894928688", advancedMatching, pixelOptions);
    if (!acceptsCookies) ReactPixel.revokeConsent();
    ReactPixel.pageView();
  }, []);
  return (
    <Container isLoaded={isLoaded}>
      <CookieConsent
        style={{ background: theme.colors.tfBackground }}
        location="bottom"
        enableDeclineButton
        flipButtons
        cookieName="user-accepts-cookies"
        buttonStyle={{
          color: theme.colors.tfBackground, //"white",
          fontFamily: "Cerebri",
          fontWeight: "bold",
          border: `2px solid white`,
          background: "white", //theme.colors.fonts.secondary,
          fontSize: "14px",
          borderRadius: "5px",
        }}
        declineButtonStyle={{
          background: "transparent",
          color: "white",
          border: `2px solid white`,
          fontFamily: "Cerebri",
          fontSize: "14px",
          borderRadius: "5px",
        }}
        onAccept={(triggeredByScrolling) => {
          if (!triggeredByScrolling) onAccept();
        }}
      >
        We use cookies to provide and improve our service. By using this site
        you consent to the use of cookies.{" "}
        <Link styles={{ color: "white" }} href="/privacy-policy">
          Learn more
        </Link>
        .
      </CookieConsent>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="tp-thankyou" element={<TPThankYou />} />
        <Route path="tp-survey" element={<TPSurvey />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route element={<NoMatch />} />
      </Routes>
    </Container>
  );
};

export default App;
