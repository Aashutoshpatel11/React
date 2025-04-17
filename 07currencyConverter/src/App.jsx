import InputBox from './components/InputBox'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useState } from 'react'

function App() {

  const [amount, setAmount] = useState('0')
  const [convertedAmount, setConvertedAmount] = useState('0')
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('ind')

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const convert = function(){
    setConvertedAmount( amount*currencyInfo[to] )
    console.log(`amount : ${amount} converted : ${convertedAmount}, rate : ${currencyInfo[to]}`);
  }

  const swap = function(){
    let temp1 = from
    setFrom(to)
    setTo(temp1)

    let temp2 = amount
    setAmount(convertedAmount)
    setConvertedAmount(temp2)
  }

  return (
    <>
      <div className='h-screen w-full bg-cover flex justify-center items-center bg-[url(https://media.licdn.com/dms/image/v2/D4D22AQG4tBPfQlHV9A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1731593656804?e=1746057600&v=beta&t=juPrBRY7jb3vE-6zu9pBJvvlIQhE7MtuIiUr2EzDS6E)]' >
        <form action="submit" className='w-full h-screen flex justify-center items-center' 
        onSubmit={ (e) => {
          e.preventDefault();
          convert();
        } }
        >
          <div className=' w-1/2 text-white flex flex-col items-center font-bold p-4 border rounded-xl backdrop-blur' >
            <InputBox
            label={'FROM'}
            amount={amount}
            currencyOptions={options}
            onAmountChange={ (amount) => {setAmount(amount)} }
            onCurrencyChange={ (currency) => setAmount(amount) }
            selectCurrency={from}
            />
            <button className='absolute top-24 bg-blue-600 hover:bg-blue-700 font-semibold text-xs rounded-md border border-white w-14 p-2 flex justify-center' 
            onClick={ () => swap() }
            >SWAP</button>
            <InputBox
            label={'TO'}
            amountDisabled={true}
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={ (currency) => setTo(currency) }
            selectCurrency={to}
            />
            <button className='bg-blue-600 hover:bg-blue-700 font-semibold w-full p-4 rounded-xl' type='submit' >Convert {from} to {to}</button>
          </div>
        </form>
        </div>
    </>
  )
}

export default App
