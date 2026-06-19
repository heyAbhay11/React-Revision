import React from 'react'
import {useUser} from './hooks/useUser'
import { useSelector } from 'react-redux'

const App = () => {

  useUser()
  const data = useSelector((state)=> state)
  console.log(data)

  return (
    <div>
     
    </div>
  )
}

export default App
