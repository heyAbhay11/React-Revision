import React, { useRef } from 'react'

const App = () => {

  const inputref = useRef({})



  const submmitHandler = (e) => {
    e.preventDefault()
    console.log(inputref.current.name.value)
    console.log(inputref.current.email.value)
    console.log(inputref.current.subject.value)
    console.log(inputref.current.message .value)
    console.log(inputref.current.checkbox.value)
  }



  return (
    <div className='min-h-screen bg-gray-700 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-2xl p-8 w-full max-w-md'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>Welcome</h1>
        <p className='text-gray-600 mb-8'>Please fill out the form below</p>

        <form onSubmit={submmitHandler} className='space-y-6'>
          {/* Name Field */}
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
              Full Name
            </label>
            <input
              ref={(e) => inputref.current.name = e}
              id='name'
              type='text'
              placeholder='Enter your name'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition'
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
              Email Address
            </label>
            <input
              ref={(e) => inputref.current.email = e}
              id='email'
              type='email'
              placeholder='Enter your email'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition'
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
              Subject
            </label>
            <input
              ref={(e) => { inputref.current.subject = e }}
              id='subject'
              type='text'
              placeholder='Enter subject'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition'
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
              Message
            </label>
            <textarea
              ref={(e) => { inputref.current.message = e }}
              id='message'
              placeholder='Enter your message'
              rows='4'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none'
            />
          </div>

          {/* Checkbox */}
          <div className='flex items-center'>
            <input
              ref={(e) => { inputref.current.checkbox = e }}
              id='terms'
              type='checkbox'
              className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer'
            />
            <label htmlFor='terms' className='ml-2 block text-sm text-gray-700'>
              I agree to the terms and conditions
            </label>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105'
          >
            Submit
          </button>

          {/* Secondary Button */}
          <button
            type='reset'
            className='w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition duration-200'
          >
            Clear Form
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
