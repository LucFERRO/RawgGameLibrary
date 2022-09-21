import React from 'react'
import { useState, useEffect } from 'react'
import ConcatenateItemsOfArray from '../helpers/Helper'
import { apiService } from '../services/APIService'
import DetailsList from './DetailsList'

export default function GameDetail({selectedGameId, setSelectedGameId}) {
    const [gameDetails, setGameDetails] = useState({})
    const [isGood, setIsGood] = useState(false)

    useEffect(() => {
        // apiService.getGameDetails(selectedGenreId).then(response => {setApiGameDetails(response.data)})
        apiService.getGameDetails(selectedGameId).then(response => {setGameDetails(response.data)})
    }, [])

    useEffect(() => {
        setIsGood(!isGood)
        console.log('gameDetails changed')
    },[gameDetails])
        
    // const handleGameClick = (e) => {
    //     e.preventDefault()
    //     const clickedGameId = e.target.dataset.id
    //     setSelectedGameId(clickedGameId)
    //     console.log(clickedGameId)
    // }

    const stylingImg = {
        width: '700px',
        height: '500px'
    }

    const ConcatenateItemsOfArrayV2 = (array, item1, item2) => {
        console.log(array)

        console.log(Reflect.get(array,item1))

        // console.log(Reflect.get(Reflect.get(array,item1)[0],item2))
        const itemKey1 = Reflect.get(array,item1)

        array.itemKey1?.map( (element,index) => {
            let itemKey2 = Reflect.get(Reflect.get(array,item1)[index],item2)
            let result = <p key={index}>{itemKey2}, </p>
            console.log('nique')
            if (index == array.length - 1) result = <p key={index}>{itemKey2} </p>
            return result
        })
    }

  return (
    <div className='container game-details'>
        <h1>{gameDetails.name}</h1>
        <p>{`${gameDetails.rating}/5, out of ${gameDetails.ratings_count} ratings`}</p>
        <img src={gameDetails.background_image} alt='' style={stylingImg}/>
        <p>Developpers: </p>
        <p>Publishers: </p>
        <p>Release date: {gameDetails.released}</p>
        <div className='game-details-genres'>
            <p>Genres: </p>
            { ConcatenateItemsOfArrayV2(gameDetails,'genres','name')}
            {/* {gameDetails.genres?.map( (genre,index) => {
                let result = <p key={index}>{genre.name}, </p>
                if (index == gameDetails.genres.length - 1) result = <p key={index}>{genre.name} </p>
                return result
        })} */}

        {/* <DetailsList array={gameDetails} item1={'genres'} item2={'name'}/> */}
        </div>
    </div>
  )
}
