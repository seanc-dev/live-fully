import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home.tsx";
import TPThankYou from "./pages/TPThankYou";
import TPSurvey from "./pages/TPSurvey";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NoMatch from "./pages/NoMatch";

const Container = styled.div`
  height: 100%;
`;

function App() {
  return (
    <Container>
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
}

export default App;
