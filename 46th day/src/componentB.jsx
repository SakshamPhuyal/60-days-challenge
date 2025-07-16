import React, { useContext } from "react";
import { UserContext } from "./componentA.jsx"; 

function MycomponentB() {
  const user = useContext(UserContext); 

  return (
    <div className="component">
      <h1>Component B</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}

export default MycomponentB;
