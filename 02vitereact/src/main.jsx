import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";


import App from './App.jsx'
import Temp from './temp.jsx'

// const NewApp = function(){
//   return(
//     <h1>Custom New APP ! sdf</h1>
//   )
// }

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https//www.google.com',
//       target: '_black'
//   },
//   children: 'Click here to visit'
// }

// const anotherElement = (
//   <a href="https://google.com" target="_black">Click HEREE</a>
// );

const temp = 'heyyyyy'

const anotherElement = React.createElement(
  'a',
  {
    href: 'https://google.com', 
    target: '_blank' 
  },
  'click me to visit google ',
  temp
)

createRoot(document.getElementById('root')).render(

  anotherElement

)
