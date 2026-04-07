import React, { useState } from 'react'


const Card = ({ data, like, dislike }) => {
    const [count, setcount] = useState(0);
    return (
        <>

            {data.map((item) => (
                <div className='bg-gray-700 w-74 h-110 p-3 gap-3 flex flex-col justify-center items-center  '>
                    <img className='w-40 rounded-2xl' src={item.url} alt="" />
                    <h1 className='text-yellow-100 font-semibold text-3xl'>{item.name}</h1>
                    <h3 className='text-yellow-100 text-center '>{item.data}</h3>
                    <wrap className="flex gap-9 mt-4 font-semibold rounded-xl">
                        <button onClick={() => like(item.id)}
                            className='text-yellow-100 px-5 py-2 bg-red-700 rounded'>Like {item.likecount} </button>

                        <button onClick={() => dislike(item.id)}
                            className='text-yellow-100 px-4 py-2 bg-green-700 rounded'>Dislike {item.dislikecount} </button>
                    </wrap>
                </div>
            ))}




        </>
    )
}

export default Card
