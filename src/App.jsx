import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CiSearch, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Home from "./pages/Home";
import Footer from "./component/Footer";

function App() {
  return (
    <section className="text-gray-900">
      {/* <CiSearch />
    <CiCirclePlus />
    <CiCircleMinus /> */}
      <Home />
      <Footer />
    </section>
  );
}

export default App;
