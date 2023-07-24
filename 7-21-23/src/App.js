import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import ViolationPage from "./components/violationPage/ViolationPage";
import Tester from "./pages/Testing";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listView" element={<ListView />} />
        <Route path="/mapView" element={<MapView />} />
        <Route path="/violation/:licensePlate" element={<ViolationPage />} />
        <Route path="/testingEnvironment" element={<Tester />} />
      </Routes>
    </Router>
  );
}
