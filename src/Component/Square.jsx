import React from 'react'
import "./style.css"

function Square ({onSquareClick, value}) {
  return (
    <button className='square' onClick={onSquareClick} >

      {value}    


      
    </button>
  )
}

export default Square

