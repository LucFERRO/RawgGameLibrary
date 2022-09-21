import React from 'react'
import { useState, useEffect } from 'react'
import { apiService } from '../services/APIService'
import Game from './Game'

export default function GameList({selectedFilter, selectedGenreId, setGameClicked, setSelectedGameId}) {

    const [apiGameData, setApiGameData] = useState({})

    useEffect(() => {
        apiService.getGames(selectedGenreId).then(response => {setApiGameData(response.data)})
    }, [selectedGenreId])
        
    const handleGameClick = (e) => {
        e.preventDefault()
        setGameClicked(true)
        const clickedGameId = e.target.dataset.id
        setSelectedGameId(clickedGameId)
    }


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
      <div className='container'>
      {apiGameData.results?.map( (game, index) => (
      <div key={index} onClick={handleGameClick} data-id={game.id}>
          <Game name={game.name} image={game.background_image}/>
      </div>
      ))}
      </div>
  </>
    )
  }


}
