import React from 'react'
import { useForm } from 'react-hook-form'
const App = () => {

const {register,handleSubmmit,reset,formState:{errors}} = useForm()
  
 
 
  return (
    <div className="min-h-screen bg-gray-500 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Notes</h1>
          <p className="text-black-600">Create and organize your thoughts</p>
        </div>

        {/* Form Container */}
        <div className="bg-yellow-50 rounded-lg shadow-lg p-8">
          <form 
          
          className="space-y-6">
            {/* Title Input */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Note Title
              </label>
              <input
              {...register("title",{required:"Title is required"})}
                type="text"
                id="title"
                placeholder="Enter your note title..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent transition"
              />
            </div>

            {/* Category Select */}
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent transition"
              >
                <option value="">Select a category</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="ideas">Ideas</option>
                <option value="todo">To-Do</option>
              </select>
            </div>

            {/* Content Textarea */}
            <div>
              <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
                Note Content
              </label>
              <textarea
                id="content"
                placeholder="Write your note here..."
                rows="8"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-200 transform hover:scale-105"
              >
                Save Note
              </button>
              <button
                type="reset"
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition duration-200 transform hover:scale-105"
              >
                Clear
              </button>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">💡 Tip:</span> Your notes will help you stay organized and productive. Fill in the title, select a category, and write your thoughts!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
