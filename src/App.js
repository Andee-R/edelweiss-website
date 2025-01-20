import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import HostEvent from "./Components/HostEvents/HostEvents";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/HostEvent" element={<HostEvent />} />
      </Routes>
    </>
  );
}
