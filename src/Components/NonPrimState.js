import React, { useState } from "react";

const NonPrimState = () => {
  // Arrays
  // const [arr, setArr] = useState([1, 2, 3]);

  // const changeArr = () => {
  //   // Create a copy/new arr
  //   // const copyArr = [...arr],
  //   // Update the copy
  //   // copyArr.push(Math.ceil(Math.random() * 100));
  //   // use setter function to update
  //   // setArr(copyArr)
  //   setArr([...arr, Math.ceil(Math.random() * 100)]);
  // };

  // const removeElem = () => {
  //   const copyArr = [...arr].slice(1);
  //   setArr(copyArr);
  //   // setArr([...arr.slice(0, arr.length - 1)]);
  // };

  // Todo -> Create a function to remove elem from middle of arr
  // Hint - use splice => splice directly changes the arr

  const [obj, setObj] = useState({
    firstName: "",
    lastName: "",
    address: {
      city: "Delhi",
      pin: 111111
    }
  });

  const changeFirstName = () => {
    // Creating the copy
    // const objCopy = { ...obj };
    // Updating the copy
    // objCopy.firstName = "Jon";
    // Setting the new/updated obj in state
    setObj({ ...obj, firstName: "Jon" });
  };

  const changeLastName = () => {
    // const objCopy = { ...obj };
    // objCopy.lastName = "Doe";
    // setObj(objCopy);
    // setObj({ ...obj, lastName: "Doe", age : 30 });

    // const copyObj = { ...obj };
    // copyObj.address.city = "Pune";

    // const addressUpdated = {...obj.address, city: "Pune"}
    // const copyObj = { ...obj, address: addressUpdated };
    setObj({...obj, address: {...obj.address, city: "Pune"}});
  };

  return (
    <div className="" name="" id="">
      NonPrimState
      {/* <div>{arr.join(", ")}</div> */}
      {/* <button onClick={changeArr}>Change Arr</button>
      <button onClick={removeElem}>Remove Elem</button> */}
      <h2>FirstName - {obj.firstName}</h2>
      <h2>LastName - {obj.lastName}</h2>
      <h2>City - {obj.address.city}</h2>
      <button onClick={changeFirstName}>Change FirstName</button>
      <button onClick={changeLastName}>Change LastName</button>
    </div>
  );
};

export default NonPrimState;
