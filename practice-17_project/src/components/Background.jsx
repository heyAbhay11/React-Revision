import React from 'react'

const Background = () => {
  return (
    <>
      <div className=' fixed z-2 w-full h-full'>
        <div className='w-full  flex items-center justify-center py-4 absolute top-[8%] bg-black'>
          <h1 className='text-zinc-400 font-medium text-[19px]'>Documents</h1>
        </div>

        <h1 className=' text-[14vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-400 leading-none tracking-tight '>Docs</h1>
        
      </div>
    </>

  )
}

export default Background
