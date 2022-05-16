import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TPThankYou from "./pages/TPThankYou";
import TPSurvey from "./pages/TPSurvey";
import NoMatch from "./pages/NoMatch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="tp-thankyou" element={<TPThankYou />} />
        <Route path="tp-survey" element={<TPSurvey />} />
        <Route element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
