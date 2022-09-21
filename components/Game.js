import React from 'react'

export default function Game({name,image}) {
    const styling = {
        background: `30% url('${image}')`,
    }
    const stylingImg = {
        width: '250px',
        height: '180px'
    }
  return (
    <div className='game-item'>
        {/* <div style={styling}></div> */}
        <p>{name}</p>
        <img src={image} alt='' style={stylingImg}/>
    </div>
  )
}
