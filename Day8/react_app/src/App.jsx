import React from 'react'
import './App.css'
import Marks from './Marks'
export const App = ({name,email,mob}) => {
  // console.log(React)
  
  return (
    <div id="disp">
      <h1>Student Details:</h1>
      <h2>Name : {name}</h2>
      <h2>Email id: {email}</h2>
      <h2>Mob No. : {mob}</h2>
      <Marks a={12} b={10} c={11}/>
    </div>
  )
}
// rface