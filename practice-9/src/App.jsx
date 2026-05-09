import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Mobile from './pages/Mobile'
import Laptop from './pages/Laptop'
const App = () => {
  return (
    <div>

      <div className='bg-gray-300 w-full h-20 py-4 px-8 flex items-center justify-between'>
        <h1 className='text-2xl'>hello</h1>
        <div className='flex items-center gap-10' >
          <Link to="/">About</Link>
          <Link to="/service">service</Link>
        </div>
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        {/* Parent Route */}
        <Route path='/service' element={<Service />}>

          {/* Child Routes */}
          <Route path='mobile' element={<Mobile />} />
          <Route path='laptop' element={<Laptop />} />
        </Route>

        <Route path='*' element={<h1 className='text-3xl'>404 | Page not found</h1>} />
      </Routes>



    </div>
  )
}

export default App
