import React from 'react';

function InputBox({
    label,
    amount,
    currencyOptions= [],
    onAmountChange,
    onCurrencyChange,
    amountDisabled = false,
    selectCurrency
}) {
    console.log(selectCurrency);
    return(
        <>
        <div className='bg-white w-full rounded-xl p-4 pb-2 mb-4 flex flex-col' >
            <div className='flex justify-between text-slate-500 font-semibold text-xs mb-2' >
                <div>{label}</div>
                <div>Currency Type</div>
            </div>
            <div className='flex justify-between' >
                <input 
                type="Number"
                className='w-1/2 p-2 border-none rounded-md font-semibold text-black'
                disabled = {amountDisabled}
                value = {amount}
                onChange = { (e) => {
                    console.log(Number(e.target.value));
                    onAmountChange && onAmountChange(Number(e.target.value))
                } }
                />
                <select 
                className='text-black font-semibold text-xs ' 
                value={selectCurrency}
                
                onChange={(e) => {
                    console.log(e.target.value);
                    onCurrencyChange && onCurrencyChange(e.target.value)
                }}
                >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                    {currency}
                    </option>
                ))}
                </select>
                
            </div>
        </div>
        </>
    )

};


export default InputBox;