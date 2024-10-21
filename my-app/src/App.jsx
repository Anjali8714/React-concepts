import React from "react";
import {Routes,Route } from "react-router-dom";
import Home from "./React-Router-Dom/Home";
import About from "./React-Router-Dom/About";
import Navbar from "./React-Router-Dom/Navbar";
import OrderSummary from "./React-Router-Dom/OrderSummary";
import Registrationpage from "../Reactapp/Registrationpage";
import Loginpage from "../Reactapp/Loginpage";
import Homepage from "../Reactapp/Homepage";

function App() {
  return (
    <div>
     
     <>
     {/* <Navbar/> */}
     <Routes>
      <Route path="/" Component={Registrationpage}/>
      <Route path="login" Component={Loginpage}/>
      <Route path="home" Component={Homepage} />
      </Routes> 
      </>
      
     
     
    </div>
  );
}

export default App;
