import React,{createContext, useContext} from "react";
import { userContext } from "./ComponentA";
i

const ComponentD = () => {


const user = useContext(userContext)

  return (
    <div>
      <div className="box">
        <h1>ComponentD</h1>
        <h2>{'Bye ${user}'}</h2>
      </div>
    </div>
  );
};

export default ComponentD
