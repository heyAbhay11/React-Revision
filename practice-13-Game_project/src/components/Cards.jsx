import React from 'react'
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router';



const Cards = ({ item }) => {

  const navigate = useNavigate()

  
  return (
    <div className=''>
      <div className='h-98 w-97 flex flex-col gap-6 rounded-xl bg-[#111111]  mt-10'>

        <img className="object-cover  h-44" src={item.background_image} alt="" />

        <div className='flex items-center gap-2 justify-between px-3 '>
          <h1 className='text-white text-2xl' >{item.name}</h1>
          <div className='flex items-center gap-2 '>
            <Star size={18} color='yellow' />
            <h2 className='text-white'>{item.rating}</h2>
          </div>
        </div>

        <p className='text-[#94A3B8] px-3'>{item.released}</p>

        <div className='flex flex-col items-center'>
          <button onClick={() => 
          { navigate(`gamesdetails/${item.id}`) }}
          className='w-70 rounded-xl hover:scale-105 transition-all font-medium bg-red-50 py-2'
          >View Details</button>
        </div>

      </div>

    </div>
  )
}

export default Cards
