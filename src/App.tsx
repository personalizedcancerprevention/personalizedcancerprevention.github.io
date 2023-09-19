import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RiskAccessment from "./pages/RiskAccessment";
import "./App.scss";
import Header from "./sharedComponents/Header";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/all-about-cancer" element={<HomePage />}></Route>
        <Route path="/risk-accessment" element={<RiskAccessment />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
