import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </div>
  );
};

export default App;
