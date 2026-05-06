import React, { useState, useEffect } from 'react'
import Card from './components/Card';
import { useFormState } from 'react-dom';

const App = () => {

  const save = JSON.parse(localStorage.getItem("PostData") || [])


  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [formdata, setformdata] = useState(save);
  const [editForm, seteditForm] = useState(null);

  useEffect(() => {
    localStorage.setItem('PostData', JSON.stringify(formdata))
  }, [formdata])







  const formHandler = (e) => {
    e.preventDefault()


    const data = [...formdata]
    if (editForm !== null) {
      data[editForm] = { title, description }
      seteditForm(null)

    }
    else {

      data.push({ title, description })
    }

    setformdata(data)



    setTitle('')
    setdescription('')

  }

  const editHandler = (index) => {        
    const item = formdata[index]

    setTitle(item.title);
    setdescription(item.description);
    seteditForm(index);
  }


  const deleteHandler = (index) => {
    const copyFormData = [...formdata]

    copyFormData.splice(index, 1)
    setformdata(copyFormData)
  }


  return (
    <div className="min-h-screen bg-linear-to-br from-black to-blue-300 flex items-start justify-center gap-8 p-4" >
      <div className="bg-gray-800  rounded-lg shadow-xl p-8 w-full max-w-md h-fit">
        <h1 className="text-3xl font-bold text-amber-100 mb-6">Create a Post</h1>

        <form onSubmit={formHandler} className="space-y-5">
          {/* Post Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-amber-50 mb-2">
              Enter Post Title
            </label>
            <input
              value={title}
              onInput={(e) => {
                setTitle(e.target.value)
              }}
              type="text"
              id="title"
              placeholder="What's your post about?"
              className="w-full placeholder-gray-500 px-4 py-2 border text-amber-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Post Description Input */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-amber-50 mb-2">
              Enter Your Post Description
            </label>
            <textarea
              value={description}
              onInput={(e) => {
                setdescription(e.target.value)
              }}
              id="description"
              placeholder="Write your post content here..."
              rows="5"
              className="w-full placeholder-gray-500 px-4 py-2 border text-amber-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105"
          >
            Post
          </button>
        </form>
      </div>

      <div className='bg-gray-800 rounded-lg shadow-xl p-8 w-80 max-w-md h-fit max-h-200 overflow-y-auto scroll-smooth '>
        <h2 className="text-2xl font-bold text-amber-100  text-center mb-4">Posts</h2>
        <Card formdata={formdata} deleteHandler={deleteHandler} editHandler={editHandler} />

      </div>


    </div>
  )
}

export default App
