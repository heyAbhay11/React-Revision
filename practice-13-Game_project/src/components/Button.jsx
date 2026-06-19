import React from 'react'

const Button = () => {
    const title = ['All Titles','Trending Now','New Releases',"RPG",'Action']
  return (
    <div className=' flex gap-6 mt-5'>
        {title.map((item)=>(
            <button className='p-2 px-6 bg-[#111111] font-medium active:text-white active:bg-blue-400 text-[#94A3B8] rounded-full'>{item}</button>
        ))}
    </div>
  )
}

export default Button
