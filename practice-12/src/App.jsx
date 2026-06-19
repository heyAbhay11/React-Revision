import React, { useContext } from 'react'
import { UserDataContext } from './context/UserContext'

const App = () => {

 const data =   useContext(UserDataContext)
  
console.log(data)

  return (
    <div>
      
    </div>
  )
}

export default App
