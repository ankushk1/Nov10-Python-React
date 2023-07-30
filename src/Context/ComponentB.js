import React, { useContext } from "react";
import { messageContext } from "../App";
import ComponentC from "./ComponentC";

const ComponentB = () => {
  const message = useContext(messageContext);
  return (
    <div>
      ComponentB
      {/* <messageContext.Consumer>
        {(value) => <h1>{value}</h1>}
      </messageContext.Consumer> */}
      <h1>{message}</h1>
      <ComponentC/> 
    </div>
  );
};

export default ComponentB;
