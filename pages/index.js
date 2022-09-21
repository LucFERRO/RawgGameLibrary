import { useState, useEffect } from 'react'
import { apiService } from '../services/APIService'
import CategoryList from '../components/CategoryList'
import Category from '../components/Category'
import GameList from '../components/GameList'
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'

export default function Home() {

    const [clicked, setClicked] = useState(false)
    const [gameClicked, setGameClicked] = useState(false)
    const [selectedGenreId, setSelectedGenreId] = useState()
    const [selectedGameId, setSelectedGameId] = useState()

    const goToHome = () => {
        setClicked(false)
        setGameClicked(false)
    }
    const goToGenres = () => {
        setGameClicked(false)
    }

    const {genreListRender, apiGenreData, selectedFilter} = CategoryList({setClicked,setSelectedGenreId})
    const {gameListRender, apiGameData} = GameList({selectedFilter, selectedGenreId, setGameClicked, setSelectedGameId})

  return (
    <>
        <div className='canvas'></div>
        <button onClick={goToHome}>Home</button>
        { !(clicked&&gameClicked) ? '' : <button onClick={goToGenres}>Genres</button> }
        <h1 className='homeH1'>Rawg.io</h1>
        {/* <button onClick={()=>filter[0]='platforms'}>Platform</button>
        <button onClick={()=>filter[0]='genres'}>Genre</button> */}

       { !clicked ?
        <>{genreListRender}</>
            :
        (!gameClicked) ? 
        <>{gameListRender}</>
        // <GameList selectedFilter={selectedFilter} selectedGenreId={selectedGenreId} setGameClicked={setGameClicked} setSelectedGameId={setSelectedGameId} />
            :
        <GameDetail selectedGameId={selectedGameId} />
        }
    </>
  )
}
