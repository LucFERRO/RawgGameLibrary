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

    const goBack = () => {
        setClicked(false)
        setGameClicked(false)
    }
    const Test = () => {
        setGameClicked(false)
    }

    const {genreListRender, apiGenreData, selectedFilter} = CategoryList({setClicked,setSelectedGenreId})
    const {gameListRender, apiGameData} = GameList({selectedFilter, selectedGenreId, setGameClicked, setSelectedGameId})

  return (
    <>
        <div className='canvas nique'></div>
        <button onClick={goBack}>Home</button>
        <button onClick={Test}>Genres</button>
        <h1 className='homeH1'>Descente produit basique avec rawg.io</h1>
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
