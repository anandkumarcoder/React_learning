import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 10;

  const addValue = () => {
    console.log("value added", Math.random());
    // counter = counter+1

    // if (counter == 20) {
    //   counter = 20
    // } else {
    //   setCounter(counter + 1)
    // }

    // interview question - what will happen if we write below code 5 times

    /* setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1); */

    setCounter(prevCounter => prevCounter +1);
    //using callback fn to get the Above result.All the call back function will be executed then state will be updated
    setCounter(prevCounter => prevCounter +1+1);
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
  };

  const removeValue = () => {
    console.log("value added", Math.random());
    if (counter == 0) {
      counter = 0;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>chai and react</h1>
      <h3>counter value {counter}</h3>

      <button
        onClick={addValue} //passing the reference to the function
      >
        Add value {counter}
      </button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
