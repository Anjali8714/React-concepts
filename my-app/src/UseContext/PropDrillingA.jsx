import React, { useState } from "react";
import "./PropDrillingA.css";
import PropDrillingB from "./PropDrillingB";

const PropDrillingA = () => {
  const [user, setuser] = useState("Brocode");

  return (
    <div className="box">
      <h1>PropDrillingA</h1>
      <h2>{`Hello ${user}`}</h2>
      <PropDrillingB user={user} />
    </div>
  );
};

export default PropDrillingA;
