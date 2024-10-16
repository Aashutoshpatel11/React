import { useState } from "react"

function App() {

  const[color,setcolor]= useState("grey")

  return (
    <div className='h-screen w-full static bg-slate-500'
    style={{backgroundColor: color}}
    >
      <div className="absolute bottom-6 translate-x-1/2 flex flex-wrap " >
        <div className="flex flex-wrap py-2 px-4 bg-white rounded-2xl" >
          <button
          onClick={()=>setcolor('Red')}
          className="bg-red-500 py-2 px-4 rounded-xl mx-4 shadow-xl " >
          Red
          </button>
          <button
          onClick={()=>setcolor('Blue')}
          className="bg-blue-500 py-2 px-4 rounded-xl mx-4 shadow-xl " >
          Blue
          </button>
          <button
          onClick={()=>setcolor('Green')}
          className="bg-green-500 py-2 px-4 rounded-xl mx-4 shadow-xl " >
          Green
          </button>
          <button
          onClick={()=>setcolor('Yellow')}
          className="bg-yellow-500 py-2 px-4 rounded-xl mx-4 shadow-xl " >
          Yellow
          </button>
          <button
          onClick={()=>setcolor('Purple')}
          className="bg-purple-500 py-2 px-4 rounded-xl mx-4 shadow-xl " >
          Purple
          </button>
          <button
          onClick={()=>setcolor('Orange')}
          className="bg-orange-500 py-2 px-4 rounded-xl mx-4 shadow-xl " >
          Orange
          </button>
          <button
          onClick={()=>setcolor('Grey')}
          className="bg-grey py-2 px-4 rounded-xl mx-4 shadow-xl " >
          Grey
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default App
