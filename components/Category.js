import React from 'react'

export default function Category({category,img}) {
    const styling = {
        background: `30% url('${img}')`,
    }

    const stylingImg = {
        width: '250px',
        height: '180px'
    }
  return (
    <div className='item'>
        {/* <div style={styling}></div> */}
        <p>{category}</p>
        <img src={img} alt='' style={stylingImg}/>
    </div>
  )
}
