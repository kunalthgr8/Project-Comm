import { useState } from "react";
import "./App.css";
import SideBar from "./components/sideBar/SideBar.jsx";
import TopBar from "./components/topBar/TopBar.jsx";
import Home from "./components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Products/Product.jsx";

function App() {
  return (
    <div className="App">
        <SideBar className="side-bar" />
      <div className="content-right">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
