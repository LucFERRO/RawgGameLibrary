// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'

const url = 'https://api.rawg.io/api'

const apiService = {
    get(filter) {
        return axios.get(`${url}/${filter}?key=${process.env.NEXT_PUBLIC_API_KEY}`)
    },
    getGames(genreId, pageNumber = '') {
        let pagination = pageNumber !== '' ? `&page=${pageNumber}` : ''
        return axios.get(`${url}/games?key=${process.env.NEXT_PUBLIC_API_KEY}&genres=${genreId}${pagination}`)
    },
    getGameDetails(gameId) {
        return axios.get(`${url}/games/${gameId}?key=${process.env.NEXT_PUBLIC_API_KEY}`)
    }
}


export { apiService }