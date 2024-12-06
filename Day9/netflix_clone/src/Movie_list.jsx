import React from 'react'
import "./Movie_list.css"
import movie from './movie'
const Movie_list = () => {
  return (
    <div className='movie-list'>
        {movie.map((ele)=>(
            <div key = {ele.id} className='movie-card'>
                <img className="movie-img" src={ele.image} alt="" />
                <h1>Title:{ele.title}</h1>
                <h2>Language:{ele.language}</h2>
                <h2>Price:{ele.cost}</h2>
            </div>
        ))}
    </div>
  )
}

export default Movie_list