import React, { useRef } from 'react'
import Cards from './Cards'


const Foreground = () => {
  const ref = useRef(null);

  const data = [
      {
        desc:"Lorem ipsum dolor adipisicing elit.Repellendus ullam explicabo placeat!",
        filesize: '4.5 Mb',
        close: false,
        tag:{isOpen: true , tagTitle:'Download Now',tagColor:'green'}
      },
      
      {
        desc:"Lorem ipsum dolor adipisicing elit.Repellendus ullam jslj  sdft jhani! sinne lhaty lkaniya ",
        filesize: '1.5 Mb',
        close: true,
        tag:{isOpen: true , tagTitle:'Download Now',tagColor:'blue'}
      },

      {
        desc:"Lorem ipsum  adipisicing elit.Repellendus ullam explicabo placeat! sjja aaltata jarmbna karitnd akalat",
        filesize: '9.5 Mb',
        close: false,
        tag:{isOpen: false , tagTitle:'Download Now',tagColor:'blue'}
      },

      {
        desc:"Lorem ipsum dolor adipisicing explicabo placeat!",
        filesize: '6.5 Mb',
        close: true,
        tag:{isOpen: true , tagTitle:'Download Now',tagColor:'blue'}
      }
    ]

  return (

    <>
      <div ref={ref} className='fixed top-0 left-0 z-3 w-full h-full flex flex-wrap '>
        {data.map((item,index)=>(
          <Cards data={item} reference={ref}/>
        ))}
     </div>
    </>
  )
}

export default Foreground
