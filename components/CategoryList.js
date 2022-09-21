import React from 'react'
import { useState, useEffect } from 'react'
import { apiService } from '../services/APIService'
import Category from './Category'

export default function CategoryList({setClicked,setSelectedGenreId}) {

    const [apiGenreData, setApiGenreData] = useState({})
    const [selectedFilter, setSelectedFilter] = useState({})

    // const [selectedGenreGames, setSelectedGenreGames] = useState({})
    
    // let filter = []
    // console.log(filter)
    
        // useEffect(() => {
        //     console.log(filter)
        // }, filter)

    useEffect(() => {
        apiService.get('genres').then(response => {setApiGenreData(response.data)});
        // apiService.get('platforms').then(response => {setApiPlatformData(response.data)});
    }, [])

    const stylingEmptySpace = {
        width: '280px',
        height: '150px'
    }


    //A upgrade
    const fillEmptySpaces = () => {
        let genreNumber = apiGenreData.results?.length
        let res = genreNumber%5
        console.log(res)
        return <div style={stylingEmptySpace}></div>
    }

    const handleRessourceClick = (e) => {
        e.preventDefault()
        setClicked(true)
        const clickedRessource = e.target.dataset.genre
        const clickedRessourceId = e.target.dataset.id
        let selectedRessource = apiGenreData.results.find( genre => genre.name == clickedRessource )
        setSelectedFilter(selectedRessource)
        setSelectedGenreId(clickedRessourceId)
        // console.log(selectedFilter)
    }

    console.log(apiGenreData)
    fillEmptySpaces();

  return {
        apiGenreData,
        selectedFilter,
        genreListRender: (
        <>
            <h2>Genres:</h2>
            <div className='container'>
                {apiGenreData.results?.map( (item, index) => (
                    <div key={index} onClick={handleRessourceClick} data-genre={item.name} data-id={item.id}>
                        <Category category={item.name} img={item.image_background} />
                    </div>
                ))}
                {fillEmptySpaces()}
            </div>
        </>
        ),
    }
}
