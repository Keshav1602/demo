import React from 'react'
import "./Marks.css"
const Marks = ({a,b,c}) => {
  return (
    <div id="sem">
    
        <h1>Marksheet</h1>
        <h2>Sem 1:{a}</h2>
        <h2>Sem 2:{b}</h2>
        <h2>Sem 3:{c}</h2>
    </div>
  )
}

export default Marks