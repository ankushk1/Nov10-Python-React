import React from "react";
import Component2 from "./component2";

const Component1 = (props) => {
  console.log(props);
  const { username, age, children } = props;
  return (
    <>
      <br />
      <br />
      Component1 <br />
      {username} is {age} years old

      <h2>{children}</h2>
      {/* <Component2 username="user 2" {...props}  /> */}
    </>
  );
};

export default Component1;
