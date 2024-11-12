import React from 'react'
import Marks from './Marks'
const Display = () => {
    const student = [{a:90,b:12,c:15},
        {a:40,b:12,c:35},
        {a:30,b:62,c:85},
        {a:20,b:22,c:35},
    ];
  return (
    <>
    {student.map((user,index)=>(<Marks key={index} a={user.a} b={user.b} c={user.c}/>))}
    {/* <Marks a={12} b={10} c={11}/> */}
    </>
  )
}

export default Display