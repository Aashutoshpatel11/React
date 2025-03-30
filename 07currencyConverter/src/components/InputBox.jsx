import React from 'react';

function InputBox() {

    return(
        <>
        <div className='bg-white w-full rounded-xl p-4 pb-2 mb-4 flex flex-col' >
            <div className='flex justify-between text-slate-500 font-semibold text-xs mb-2' >
                <div>FROM</div>
                <div>Currency Type</div>
            </div>
            <div className='flex justify-between' >
                <input 
                type="Number"
                className='w-1/2 p-2 border-none rounded-md font-semibold text-black'
                />
                <select 
                className='text-black font-semibold text-xs ' 
                name="" id="">
                    <option value="USD">USD</option>
                </select>
                
            </div>
        </div>
        </>
    )

};


export default InputBox;