import React from 'react'
import Movie_list from './Movie_list'

const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor: "black",
                  color:"red",
                  textAlign:"center",
                  fontSize:"20px"}}>Netflix Clone App</h1>
      <Movie_list/>
    </div>
    
  )
}

export default App