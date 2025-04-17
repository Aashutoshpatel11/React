import React from "react";
import { useParams } from 'react-router-dom';

function User(){
    const {userid} = useParams();
    return(
        <div className="flex justify-center item-center" >
            <div className="text-center text-gray-500 text-xl border-2 border-gray-500 font-bold p-2 rounded-2xl " >user: <span className="text-orange-700" >{userid}</span></div>
        </div>
    )
}

export default User;