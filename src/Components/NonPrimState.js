import React, { useState } from "react";

const NonPrimState = () => {
  // Arrays
  const [arr, setArr] = useState([1, 2, 3]);

  const changeArr = () => {
    // Create a copy/new arr
    // const copyArr = [...arr],
    // Update the copy
    // copyArr.push(Math.ceil(Math.random() * 100));
    // use setter function to update
    // setArr(copyArr)
    setArr([...arr, Math.ceil(Math.random() * 100)]);
  };

  const removeElem = () => {
    const copyArr = [...arr].slice(1);;
    setArr(copyArr);
    // setArr([...arr.slice(0, arr.length - 1)]);

  };

    // Todo -> Create a function to remove elem from middle of arr
    // Hint - use splice => splice directly changes the arr


  return (
    <div>
      NonPrimState
      <div>{arr.join(", ")}</div>
      <button onClick={changeArr}>Change Arr</button>
      <button onClick={removeElem}>Remove Elem</button>
    </div>
  );
};

export default NonPrimState;
