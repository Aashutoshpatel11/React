import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router";

function Github(){
    // const [data, setData] = useState({})
    const data = useLoaderData()

    // useEffect( () => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then( response => response.json() )
    //     .then( data => setData(data) )
    // },[] )

    return(
        <div className="flex justify-evenly" >
            <img width='300px' src={data.avatar_url} alt="" />
            <div className="text-center width-50 text-gray-500 text-xl border-2 border-gray-500 font-bold p-2 rounded-2xl " >Followers: {data.followers}</div>
            
        </div>  
    )
}
export default Github;
export const getGithub = async function(){
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    return response.json();
}


