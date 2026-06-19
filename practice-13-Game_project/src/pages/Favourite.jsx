import React, { useContext, useEffect } from 'react'
import { gamesDataContext } from '../context/GamesContext'

const Favourite = () => {

  const {favourite} = useContext(gamesDataContext)

  useEffect(()=>{
      console.log(favourite)
  },[])

  if(favourite.length == 0){
    return <p className='text-white'>No favourite yet</p>
  }

  return (
    <>
      <div className='p-10 text-white'>
      {favourite.map((fav)=>(
        <h1>hello</h1>
      ))}
      </div> 
    </>
  )
}

export default Favourite

