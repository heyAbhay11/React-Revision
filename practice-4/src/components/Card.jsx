import React from 'react'

const Card = ({ formdata, deleteHandler, editHandler }) => {
    return (
        <>
            <div className="space-y-4">
                {formdata.map((data, index) => (
                    <div key={index} className="bg-gray-300 h-60 rounded-lg shadow-md p-6  hover:shadow-lg transition flex flex-col justify-between">
                        <div>
                            <h1 className="text-xl font-bold text-gray-800 mb-2">{data.title}</h1>
                            <p className="text-gray-600 leading-relaxed">{data.description}</p>
                        </div>
                        <div className="mt-4 flex gap-2">
                            <button
                                onClick={() => editHandler(index)}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-2 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteHandler(index)}
                                className="flex-1 bg-red-800 hover:bg-red-700 text-white font-semibold py-2 px-2 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card
