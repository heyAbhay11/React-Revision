import React from 'react'
import { api } from '../config/api'


export const GamesLoader = async ({request}) => {

    const url = new URL(request.url)
    console.log(url)

    const search  = url.searchParams.get('search')

    const res = await api.get('/games',{
        params:{
            key:import.meta.env.VITE_API_KEY
        }
    })  

        return res
}

export default GamesLoader



