import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import StateComp from './Components/StateComp';
import NonPrimState from './Components/NonPrimState';

function App() {
  return (
    <div className="App">
      {/* <Component1/> */}
      {/* <StateComp/> */}
      <NonPrimState/>
    </div>
  );
}

export default App;
