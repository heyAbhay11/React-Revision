import React, { useState } from 'react'
import Card from "./components/Card"
const App = () => {

  const [poatData, setpoatData] = useState([{
    id: 1,
    url: 'https://images.unsplash.com/photo-1740600730660-e7fd080ff2a7?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Sneha",
    data: " Freelancer Blogger",
    likecount: 0,
    dislikecount:0
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1678630401136-9f27e5720943?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Bhavika",
    data: " Interior Designer  3D Artist  Photographer Travler",
    likecount: 0,
    dislikecount:0
  }]);

  const like = (id)=>{
    setpoatData((prev)=>prev.map((item)=> item.id === id ? {...item,  likecount:item.likecount+1} : item ))
  }

const dislike = (id)=>{
  setpoatData((prev)=>prev.map((item)=> item.id === id  ? {...item , dislikecount:item.dislikecount + 1} : item ))
}




  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1)
  }

  const decrement = () => {
    setcount(count - 1)
  }

  const incrementBy = () => {
    setcount((prev) => prev + 5)
  }

  return (
    <div className='h-screen w-screen flex justify-around p-9 bg-black'>
      <div className='flex h-84 w-84 items-center rounded select-none flex-col gap-3 bg-gray-600 justify-center'>
        <h1 className='bg-amber-300 p-7 rounded-2xl text-4xl mb-6'>{count}</h1>
        <button className='bg-indigo-300 font-semibold px-4 py-1   rounded' onClick={increment}>Increment</button>
        <button className='bg-indigo-300 font-semibold px-4 py-1  rounded' onClick={decrement}>Decrement</button>
        <button className='bg-indigo-300 font-semibold px-4 py-1  rounded' onClick={incrementBy}>Jump 5</button>
      </div>

     <Card data={poatData} like={like} dislike={dislike}/>
    </div>


  )
}

export default App
