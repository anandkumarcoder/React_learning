import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);;

  const [charAllowed ,setCharAllowed] = useState(false)

  const[password ,setPassword] =useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // !@#$%^&*_-+=[]{}~`
    // 1234567890

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*_-+=[]{}~`";



  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <h1 className="text-4xl bg-black text-white">Password Generator</h1>
    </>
  );
}

export default App;
