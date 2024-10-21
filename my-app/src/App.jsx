import React from "react";
import {Routes,Route } from "react-router-dom";
import Home from "./React-Router-Dom/Home";
import About from "./React-Router-Dom/About";
import Navbar from "./React-Router-Dom/Navbar";
import OrderSummary from "./React-Router-Dom/OrderSummary";

function App() {
  return (
    <div>
     
     <>
     <Navbar/>
     <Routes>
      <Route path="/" Component={Home}/>
      <Route path="about" Component={About}/>
      <Route path="order-summary" Component={OrderSummary} />
      </Routes> 
      </>
      
     
     
    </div>
  );
}

export default App;
