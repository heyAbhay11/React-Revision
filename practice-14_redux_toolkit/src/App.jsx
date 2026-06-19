import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByUser } from './app/features/CounterSlice'

const App = () => {

const data = useSelector((state)=>state.count.value)
const dispatch = useDispatch()

  return (
    <div>
     <div className='flex gap-10'>
      <h1 className='text-3xl'>counter - {data}</h1>  
     </div>
     
    <div className=' flex gap-10'>
       <button 
    onClick={() => dispatch(increment())} 
     className='px-3 py-1 bg-amber-800 rounded-2xl mt-5 active:scale-95'>incre</button>

    <button 
    onClick={() => dispatch(decrement())} 
     className='px-3 py-1 bg-amber-800 rounded-2xl mt-5 active:scale-95'>decre</button>

     <button 
    onClick={() => dispatch(incrementByUser(10))} 
     className='px-3 py-1 bg-amber-800 rounded-2xl mt-5 active:scale-95'>By user Input</button>
    </div>
    
    </div>
  )
}

export default App
