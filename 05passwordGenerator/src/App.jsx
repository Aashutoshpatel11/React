import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 
    <div className='flex justify-center align-middle flex-wrap' >
      <div className='bg-slate-500 w-3/4 p-6 rounded-xl' >
        <div className='flex justify-center' >
          <input className='h-10 w-3/4 rounded-l-xl p-4' />
          <button className='h-10 w-16 rounded-r-xl hover:bg-blue-700 bg-blue-800 text-white font-bold' >COPY</button>
        </div>
        <div className='text-white font-semibold mt-10' >
          <input className='ml-4 mr-4' type="range" />length of Password
          <input className='ml-4' type="checkbox" />Numbers
          <input className='ml-4' type="checkbox" />Characters
        </div>
      </div>
    </div>
    
  )
}

export default App
