import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import HostEvent from "./Components/HostEvents/HostEvents";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <HostEvent />
      <About />
    </>
  );
}
