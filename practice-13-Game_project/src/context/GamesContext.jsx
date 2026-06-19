import React, { useState } from 'react'
import { createContext } from 'react'

export const gamesDataContext = createContext()

const GamesContext = ({children}) => {
  const [favourite, setFavourite] = useState([]);

  const addToFav = (game)=>{
    setFavourite(prev=>{
       const exists = prev.find((item)=> item.id === game.id)
       if(exists) return prev
       else return [...prev,game] 
    })
  }



  return (
    <div>
      <gamesDataContext.Provider value={{addToFav,favourite}}>
        {children}
      </gamesDataContext.Provider>
    </div>
  )
}

export default GamesContext
