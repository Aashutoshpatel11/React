import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setcounter] = useState(10)

  let ADD = ()=>{
    if (counter<20){
      // setcounter( prevcounter => prevcounter+1 )
      // setcounter( prevcounter => prevcounter+1 )
      // setcounter( prevcounter => prevcounter+1 )
      // setcounter( prevcounter => prevcounter+1 )
      setcounter(counter+1)
    }
  }
  let DELETE = ()=>{
    if(counter>0){
      setcounter(counter-1)
    }
  }

  return (
    <>
    <h1>Aashutosh Patel</h1>
    <h2>Count : {counter}</h2>

    <button
    onClick={ADD}
    >ADD</button>
    <br/>
    <button
    onClick={DELETE}
    >DELETE</button>
    <p>{counter}</p>
    </>
  )
}

export default App
