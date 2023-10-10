import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card"

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name:"anand",
    age:23
  }

  let newArray = [1,2,3]

  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-lg mb-4'>tailwind test</h1>
<Card userName = "Anand"  btnText="click Me" someObj= {myObj} someArray = {newArray}/>
<Card userName = "Rohit" />

    </>
  )
}

export default App
