import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import GeneticRiskAssessment from "./pages/GeneticRiskAssessment";
import "./App.scss";
import Header from "./sharedComponents/Header";
import { Button, ConfigProvider, theme } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        // 1. Use dark algorithm
        algorithm: theme.darkAlgorithm,

        // 2. Combine dark algorithm and compact algorithm
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/all-about-cancer" element={<HomePage />}></Route>
          <Route
            path="/risk-accessment"
            element={<GeneticRiskAssessment />}
          ></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
