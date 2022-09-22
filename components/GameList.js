import React from 'react'
import { useState, useEffect } from 'react'
import { apiService } from '../services/APIService'
import Game from './Game'

export default function GameList({selectedFilter, selectedGenreId, setGameClicked, setSelectedGameId}) {

    const [apiGameData, setApiGameData] = useState({})
    const [pageNumber, setPageNumber] = useState()

    useEffect(() => {
        apiService.getGames(selectedGenreId,pageNumber).then(response => {setApiGameData(response.data)})
    }, [selectedGenreId])
        
    const handleGameClick = (e) => {
        e.preventDefault()
        setGameClicked(true)
        const clickedGameId = e.target.dataset.id
        setSelectedGameId(clickedGameId)
    }

    // const changePageNumber = (number) => {
    //     setPageNumber(number)
    // }

    // console.log(apiGameData)

//   return (
//     <>
//         <h2>{selectedFilter.name} games:</h2> 
//         <div className='container'>
//         {apiGameData.results?.map( (game, index) => (
//         <div key={index} onClick={handleGameClick} data-id={game.id}>
//             <Game name={game.name} image={game.background_image}/>
//         </div>
//         ))}
//         </div>
//     </>
//   )

  return {
    apiGameData,
    gameListRender: (
    <>
        <h2>{selectedFilter.name} games:</h2> 
        <div className='game-list'>
            <div className='container'>
            {apiGameData.results?.map( (game, index) => (
            <div key={index} onClick={handleGameClick} data-id={game.id}>
            <Game name={game.name} image={game.background_image}/>
            </div>
            ))}
            </div>
            <div className='pagination'>
                <p>{'<'}</p>
                {/* <p onClick={changePageNumber(1)}>1</p>
                <p onClick={changePageNumber(2)}>2</p>
                <p onClick={changePageNumber(3)}>3</p> */}
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>{'>'}</p>
            </div>
        </div>
    </>
    )
  }


}
