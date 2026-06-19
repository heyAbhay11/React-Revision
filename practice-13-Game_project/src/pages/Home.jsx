import React, { useEffect } from 'react'
import { api } from '../config/api'
import Button from '../components/Button'
import Cards from '../components/Cards'
import { useLoaderData,  } from 'react-router'

const Home = () => {
   

    const {data} = useLoaderData()
    console.log(data)
  return (
    <div className='px-8'>
      <div className='text-white py-10 '>
        <h1 className='font-semibold mb-7  text-6xl '>Explore the Metaverse</h1>
        <p className=' text-xl text-[#94A3B8] ' >Discover your next obsession from our meticulously curated database of the <br/> world's most legendary titles.</p>
      </div>
      <Button/>
      <div className='w-full flex flex-wrap gap-5 justify-around'>
           {data.results.map((item)=>(
            <Cards key={item.id} item={item}/>
           ))}
      </div>
   
    </div>
  )
}

export default Home
