import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https//www.google.com',
//       target: '_blank'
//   },
//   children: "Click me to go to link"
// }

const name = ' Aashutosh Patel'

const reactElement = React.createElement(
  'a',
  { href:'https://www.google.com' , target: '_blank' },
  'visit gooooogle',
  name
)

const anotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)

createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
