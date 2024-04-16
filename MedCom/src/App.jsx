import { useState } from "react";
import "./App.css";
import SideBar from "./components/sideBar/SideBar.jsx";
import TopBar from "./components/topBar/TopBar.jsx";
import Home from "./components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="content-right">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
