import React from 'react'
import { useState, useEffect } from 'react'
import ConcatenateItemsOfArray from '../helpers/Helper'
import { apiService } from '../services/APIService'
import DetailsList from './DetailsList'

export default function GameDetail({selectedGameId, setSelectedGameId}) {
    const [gameDetails, setGameDetails] = useState({})

    useEffect(() => {
        // apiService.getGameDetails(selectedGenreId).then(response => {setApiGameDetails(response.data)})
        apiService.getGameDetails(selectedGameId).then(response => {
            setGameDetails(response.data)
        })
    }, [])
    
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

    // const ConcatenateItemsOfArrayV2 = (array, item1, item2) => {
    //     console.log(array)

    //     console.log(Reflect.get(array,item1))

    //     // console.log(Reflect.get(Reflect.get(array,item1)[0],item2))
    //     const itemKey1 = Reflect.get(array,item1)

    //     array.itemKey1?.map( (element,index) => {
    //         let itemKey2 = Reflect.get(Reflect.get(array,item1)[index],item2)
    //         let result = <p key={index}>{itemKey2}, </p>
    //         if (index == array.length - 1) result = <p key={index}>{itemKey2} </p>
    //         return result
    //     })
    // }
    // console.log(gameDetails)

    let fullStar = '★'
    let emptyStar = '☆'
    const displayRating = (rating) => {
        let result = ''
        let flooredRating = Math.floor(rating)
        return fullStar.repeat(flooredRating)+emptyStar.repeat(5-flooredRating)
    }


  return (
    <div className='container game-details'>
        <h1>{gameDetails.name}</h1>
        <p>{`${displayRating(gameDetails.rating)} ${gameDetails.rating}/5 out of ${gameDetails.ratings_count} ratings`}</p>
        <img src={gameDetails.background_image} alt='' style={stylingImg}/>
        <div>
            <p>Developped by: </p>
            {gameDetails.developers?.map( (dev,index) => {
                let result = <p key={index}>{dev.name}, </p>
                if (index == gameDetails.developers.length - 1) result = <p key={index}>{dev.name} </p>
                return result
        })}
        </div>
        <div>
            <p>Published by: </p>
            {gameDetails.publishers?.map( (publisher,index) => {
                    let result = <p key={index}>{publisher.name}, </p>
                    if (index == gameDetails.publishers.length - 1) result = <p key={index}>{publisher.name} </p>
                    return result
            })}
        </div>
        <p>Release date: {gameDetails.released}</p>
        <div>
            <p>Genres: </p>
            {/* { ConcatenateItemsOfArrayV2(gameDetails,'genres','name')} */}
        {gameDetails.genres?.map( (genre,index) => {
                let result = <p key={index}>{genre.name}, </p>
                if (index == gameDetails.genres.length - 1) result = <p key={index}>{genre.name} </p>
                return result
        })}

        {/* <DetailsList array={gameDetails} item1={'genres'} item2={'name'}/> */}
        </div>

        <div>
            <p>Platforms: </p>
            {gameDetails.platforms?.sort().map( (platform,index) => {
                    let result = <p key={index}>{platform.platform.name}, </p>
                    if (index == gameDetails.platforms.length - 1) result = <p key={index}>{platform.platform.name} </p>
                    return result
            })}
        </div>

        <div className='game-description'>
            <p>Description: </p>
            <p>{gameDetails.description_raw}</p>
        </div>
        <div className='game-tag-list'>
            <p>Tags:</p>
            {gameDetails.tags?.map( (tag,index) => {
                let result = <span key={index}>{tag.name} </span>
                // if (index == gameDetails.tags.length - 1) result = <p key={index}>{tag.name} </p>
                return result
        })}
        </div>
    </div>
  )
}
