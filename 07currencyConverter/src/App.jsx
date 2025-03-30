import InputBox from './components/InputBox'
import './App.css'

function App() {


  return (
    <>
      <div className='h-screen w-full bg-cover flex justify-center items-center bg-[url(https://media.licdn.com/dms/image/v2/D4D22AQG4tBPfQlHV9A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1731593656804?e=1746057600&v=beta&t=juPrBRY7jb3vE-6zu9pBJvvlIQhE7MtuIiUr2EzDS6E)]' >
        <div className=' w-1/2 text-white flex flex-col items-center font-bold p-4 border rounded-xl backdrop-blur' >
          <InputBox/>
          <button className='absolute top-24 bg-blue-600 hover:bg-blue-700 font-semibold text-xs rounded-md border border-white w-14 p-2 flex justify-center' >SWAP</button>
          <InputBox/>
          <button className='bg-blue-600 hover:bg-blue-700 font-semibold w-full p-4 rounded-xl' >Convert USD to INR</button>
        </div>
       </div>
    </>
  )
}

export default App
