
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className='h-screen w-screen' 
    style={{ 'backgroundColor': color }}
    >
      <div className='fixed bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-3xl flex p-2' >
        <button className='bg-black rounded-2xl p-2 m-2' 
        onClick={ () => setColor('black') }
        >Black</button>
        <button className='bg-red-500 rounded-2xl p-2 m-2' 
        onClick={ () => setColor('red') }
        >Red</button>
        <button className='bg-blue-500 rounded-2xl p-2 m-2' 
        onClick={ () => setColor('blue') }
        >Blue</button>
        <button className='bg-green-500 rounded-2xl p-2 m-2' 
        onClick={ () => setColor('green') }
        >Green</button>
        <button className='bg-yellow-500 rounded-2xl p-2 m-2' 
        onClick={ () => setColor('yellow') }
        >Yellow</button>
        <button className='bg-purple-500 rounded-2xl p-2 m-2' 
        onClick={ () => setColor('purple') }
        >Purple</button>
        <button className='bg-black rounded-2xl p-2 m-2' 
        onClick={ () => setColor('black') }
        >Black</button>
        <button className='bg-red-500 rounded-2xl p-2 m-2' 
        onClick={ () => setColor('red') }
        >Red</button>
        <button className='bg-blue-500 rounded-2xl p-2 m-2' 
        onClick={ () => setColor('blue') }
        >Blue</button>
        <button className='bg-green-500 rounded-2xl p-2 m-2' 
        onClick={ () => setColor('green') }
        >Green</button>
        <button className='bg-yellow-500 rounded-2xl p-2 m-2' 
        onClick={ () => setColor('yellow') }
        >Yellow</button>
        <button className='bg-purple-500 rounded-2xl p-2 m-2' 
        onClick={ () => setColor('purple') }
        >Purple</button>
      </div>
    </div>
    </>
  )
}

export default App
