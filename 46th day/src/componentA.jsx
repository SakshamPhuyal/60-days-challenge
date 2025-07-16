import React, { useState, createContext } from "react"; 
import MycomponentB from "./componentB.jsx";

export const UserContext = createContext();

function MycomponentA() {
  const [user, setUser] = useState("Saksham");

  return (
    <div className="component">
      <h1>My Component A</h1>
      <h2>{`Welcome ${user}`}</h2>
      <UserContext.Provider value={user}>
        <MycomponentB /> 
      </UserContext.Provider>
    </div>
  );
}

export default MycomponentA;
