import React from 'react'

const Card = ({data}) => {
  return (
    <div className='flex gap-3 flex-wrap justify-center'>
      {data.map((user)=>(
        
           <div className='h-99 w-80 p-5 bg-stone-700 m-7  rounded-2xl flex flex-col  gap-7 items-center'>
                    <img className='h-40 object-cover rounded-xl' src={user.url} alt="" />
                    <h1 className='font-medium text-3xl'>{user.name}</h1>
                    <h2 className='text-xl'>{user.age}</h2>
                    <h2>{user.city}</h2>
                </div>
      ))}
    </div>
  )
}

export default Card
