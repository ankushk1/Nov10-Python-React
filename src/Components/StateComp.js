import React, { useState } from "react";

const StateComp = () => {
  // let num = 0;

  // const [stateVariable, setterFunc] = useState(initialState/initalValue)
  // const [num, setNum] = useState(0);
  // Strings, booleans and Numbers
  
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  // const incrementNum = (val) => {
  //   setNum(num + val);
  // };

  const incrementNum = () => {
    setCount((prevVal) => {
      return prevVal + 1;
    });
    setCount(30);

  };

  const changeName = () => {
    setName("ABC")
  }

  return (
    <div>
      StateComp
      <div>{name}</div>
      <button onClick={() => changeName()}>Increment</button>
    </div>
  );
};

export default StateComp;
