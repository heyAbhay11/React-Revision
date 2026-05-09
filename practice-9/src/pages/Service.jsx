import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Service = () => {
  return (
    <>

        <div className='flex gap-4 pl-4 pt-3'>
            <Link to="/service/mobile">Mobile</Link>
            <Link to="/service/laptop">Laptop</Link> 
        </div>

      <Outlet/>

    </>
  )
}

export default Service
