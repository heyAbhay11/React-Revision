import React from 'react'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { fetchData } from './app/UserSlice'
const App = () => {
  const dispatch = useDispatch();
  const data =  useSelector((state)=>state.products)
  console.log(data)
 

  return (
    <div>
        <button onClick={() => dispatch(fetchData())} className='px-6 rounded-xl m-10 active:scale-95 text-2xl bg-blue-500 py-2'
        >Get Data</button>
    </div>
  )
}
export default App
