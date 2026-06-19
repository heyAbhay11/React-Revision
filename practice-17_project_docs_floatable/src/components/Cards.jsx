import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import {motion} from 'framer-motion'

const Cards = ({ data , reference }) => {
  return (
    <div className='p-8'>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{bounceStiffness:110 , bounceDamping: 30}} dragElastic={1.1} className='w-68 h-79 shrink-0 bg-zinc-700/90 relative rounded-4xl px-7 py-6 overflow-hidden text-white'>
        <FaRegFileLines size={19} />
        <p className='pt-6 text-[15px] font-semibold '>{data.desc}</p>

        <div className='footer absolute bottom-0 w-full  left-0 '>
          <div className='flex justify-between items-center px-8 py-4 text-white'>
            <h2>{data.filesize}</h2>
            <h2>{data.close ? <IoCloseOutline size={25} /> : <MdDownloadForOffline size={25} />} </h2>
          </div>

        {data.tag.isOpen && (<div className={`tag w-full py-7 ${data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'} h-10 flex items-center justify-center`} >
            <h3 className='text-white'>{data.tag.tagTitle}</h3>
          </div>
        )  }

          

        </div>
      </motion.div>

    </div>
  )
}

export default Cards
