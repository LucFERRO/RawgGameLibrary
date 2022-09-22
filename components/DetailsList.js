import React from 'react'
import { useState } from 'react'

export default function DetailsList({array, item1, item2}) {
    const [gameDetails, setGameDetails] = useState([])
    setGameDetails(array.Reflect.get(array,item1))
    // console.log(gameDetails)
    // console.log(Reflect.get(array,item1))
    // console.log(Reflect.get(Reflect.get(array,item1)[0],item2))
    let itemKey = Reflect.get(array,item1)
  return (
    <>
        {array.itemKey?.map( (element,index) => {
            let itemKey2 = Reflect.get(element,item2)
            let result = <p key={index}>{itemKey2}, </p>
            if (index == array.length - 1) result = <p key={index}>{element.item2} </p>
            return result
        })}
    </>
  )
}
