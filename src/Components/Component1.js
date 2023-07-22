import React from "react";
import Component2 from "./component2";

const name = "User 1";
const age = 20;
const arr = ["one", "two", "three"].join(" ");

const obj = {
  name: "ABC",
  age: 40
};

const Component1 = () => {
  return (
    <>
      <div id="comp1">
        <p>
          The name is {name} and the age is {age} {true}
        </p>

        <div>
          <h2>{arr}</h2>
        </div>
      </div>

      <div>
        <h3>{obj.name}</h3>
        <h3>{obj.age}</h3>
      </div>
      {/* <Component2 /> */}
    </>
  );
};

export default Component1;
