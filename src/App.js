import logo from "./logo.svg";
import "./App.css";
import Component1 from "./Components/Component1";
import StateComp from "./Components/StateComp";
import NonPrimState from "./Components/NonPrimState";
import Component2 from "./Components/component2";
import ComponentA from "./Context/ComponentA";
import { createContext } from "react";

export const messageContext = createContext(null);
messageContext.displayName = "messageContext";

function App() {
  return (
    <div className="App">
      {/* <Component1 username="user 1" age={40} bool={true} /> */}
      {/* <Component1 username="user 2" age={30} bool={true} /> */}
      {/* <StateComp/> */}
      {/* <NonPrimState/> */}

      {/* <Component1 username="user 1" age={40} bool={true} arr={[1, 2, 3]}>
        <Component2 username="user 1" />
      </Component1> */}
      <messageContext.Provider value="Message from App.js">
        <ComponentA />
      </messageContext.Provider>
    </div>
  );
}

export default App;
