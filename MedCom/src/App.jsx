import { useState } from "react";
import "./App.css";
import SideBar from "./components/sideBar/SideBar.jsx";
import TopBar from "./components/topBar/TopBar.jsx";
import Home from "./components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Products/Product.jsx";
import Offers from "./components/offer/Offers.jsx";
import Contact from "./components/contact/Contact.jsx"

function App() {
  return (
    <div className="App">
      <SideBar className="side-bar" />
      <div className="content-right">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
