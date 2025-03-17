import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  const newObj={
    username: 'aashu',
    age: 21
  }
  const newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-purple-300 p-8 rounded-2xl mb-8' >Hello World | Aashutosh Patel </h1>
      <div className='flex justify-between' >
        <Card username='Aashutosh Patel' btnText='Click me' />
        <Card username="Patel"/>
      </div>
    </>
  )
}

export default App
