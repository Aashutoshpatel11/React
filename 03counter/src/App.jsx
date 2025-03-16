import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] =useState(5);

  const addValue = function(){
    if( count<20 ){
      setCount(count+1)
    }
  }

  const removeValue = ()=>{
    if( count>0 ){
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>Aashutosh Patel | Counter</h1>
      <h3>Count : {count}</h3>
      <br/>
      <button
      onClick={addValue}
      >Add Value</button>

      <br/>

      <button
      onClick={removeValue}
      >remove Value</button>
    </>
  )
}

export default App
