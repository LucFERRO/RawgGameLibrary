// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'

const url = 'https://api.rawg.io/api'
let rawgApiKey = '' 

if (!process.env.NEXT_PUBLIC_API_KEY) {
    rawgApiKey = '39e9827367fa4218a54bd1d841498726'
} else {
    rawgApiKey = process.env.NEXT_PUBLIC_API_KEY
}

const apiService = {
    get(filter) {
        return axios.get(`${url}/${filter}?key=${rawgApiKey}`)
    },
    getGames(genreId, pageNumber = '') {
        let pagination = pageNumber !== '' ? `&page=${pageNumber}` : ''
        return axios.get(`${url}/games?key=${rawgApiKey}&genres=${genreId}${pagination}`)
    },
    getGameDetails(gameId) {
        return axios.get(`${url}/games/${gameId}?key=${rawgApiKey}`)
    }
}


export { apiService }