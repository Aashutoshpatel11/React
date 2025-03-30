import { useEffect } from 'react';
import { use, useState, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("none")

 const passwordGenerator = useCallback( () => {
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numAllowed) str += "0123456789"
  if(charAllowed) str += "~`!@#$%^&*()_+=-{}|[]\:;,./<>?"

  let pass=""

  for (let i=1; i<=length ; i++) {
    let char_index = Math.floor(Math.random()*str.length +1);
    pass += str.charAt(char_index)
  }
  setPassword(pass);
  console.log(password);

 } , [length, numAllowed, charAllowed, setPassword] ) 

 useEffect( () => { passwordGenerator() } , [length, numAllowed, charAllowed, passwordGenerator] )

//  useRef Hook

const passwordRef = useRef(null);

const copyPasswordToClipboard = useCallback( () => {
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select();
  setDisplay( (prev) => {
    if( prev === "none" ){
      prev="flex"
      setTimeout(() => {
        setDisplay("none")
      }, 2000);
    }else{
      prev="none"
    }
  } )
} , [password] )


  return (
    <>
    <div className='h-screen w-full bg-blue-200 flex justify-center' >
      <div className='w-1/2 h-1/2 bg-yellow-100 rounded-3xl mt-8 ' >
        <h1 className='text-blue-500 font-bold text-2xl mt-4' >Password Generator</h1>
        <div className='bg-slate-400 justify-center rounded-l p-2 text-yellow-100 font-semibold '
        style={{ 'display': display }}
        >copied</div>
        <div className=' w-full flex pl-8 pr-8 mt-8 ' >
          <input 
          className='p-2 w-full pl-4 outline-none rounded-l-xl' 
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          />
          <button className='bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-xl font-semibold' 
          onClick={ copyPasswordToClipboard }
          >copy</button>
        </div>
        <div className='mt-8' >
          <input type="range" 
          className='mr-2'
          min={6}
          max={20}
          onChange={ (e) => {setLength(e.target.value)} }
          />
          <label className='mr-2' >Length ({length})</label>
          <input 
          className='mr-2' 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={ () => {setCharAllowed( (prev) => !prev )} }
          />
          <label className='mr-2' >Characters</label>
          <input 
          className='mr-2' 
          type="checkbox"
          defaultChecked={numAllowed}
          onChange={ () => {setNumAllowed( (prev) => !prev )} }
          />
          <label>Numbers</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
