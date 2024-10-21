import React,{useState,createContext} from "react";
import './ComponentA.css'
import ComponentB from "./ComponentB";

export const userContext = createContext(); 

const ComponentA = () => {
  const [user, setuser] = useState("Brocode");
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <userContext.Provider value={user}>
      <ComponentB user={user}/>
      </userContext.Provider>
    </div>
  );
};    

export default ComponentA
