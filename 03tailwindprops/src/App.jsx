import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // let myarr=[1,2,3]
  // let myobj={
  //   name: 'patel'
  // }

  return (
    <>
      <h1 className='bg-slate-600 text-black rounded-xl mb-4'>
      Hello world!
    </h1>
    <Card username='Aashutosh Patel' btn="visit me" />
    <Card username='Learning React'/>
    </>
  )
}

export default App
