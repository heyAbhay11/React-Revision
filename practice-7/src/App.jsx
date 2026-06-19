import React from 'react'
import { useForm } from 'react-hook-form'
const App = () => {


  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  console.log(errors)



  
  const handleFormSubmit = (data) => {
    console.log(data)
    reset()
  }



  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-8">Please fill out the form below</p>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input

              {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be contain at least 3 characters" } })}

              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {errors.name && <p className='text-red-600' >{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
              placeholder="john@example.com"
              id='email'
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {errors.email && <p className='text-red-600' >{errors.email.message}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              {...register("phone", {
                required: "Phone Number is required",
                minLength: { value: 10, message: "Phone Number must be 10 digits" },
                maxLength: { value: 10, message: "Phone Number must be 10 digits" }
              })}
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {errors.phone && <p className='text-red-600' >{errors.phone.message}</p>}
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Subject</label>
            <select
              {...register("subject", {
                required: "Subject is required"
              })}

              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white">

              <option value="" >Select a subject</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Feedback</option>
              <option>Other</option>
            </select>
            {errors.subject && <p className='text-red-600' >{errors.subject.message}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              {...register("message", {
                required: "Message is required",
                maxLength: { value: 10, message: "Message must be 10 characters" },
                minLength: { value: 10, message: "Message must be 10 characters" }
              })}
              rows="4"
              placeholder="Enter your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            />
            {errors.message && <p className='text-red-600' >{errors.message.message}</p>}
          </div>

          {/* Checkbox */}
          <div className="flex items-center">
            <input
              {...register("agree", {
              required: "You must agree to the terms and conditions"
              }
              )}
              type="checkbox"
              id="agree"
              className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="agree" className="ml-2 text-gray-700">
              I agree to the terms and conditions
            </label>
            {errors.agree && <p className='text-red-600' >{errors.agree.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition duration-200 transform hover:scale-105 shadow-lg"
          >
            Send Message
          </button>

          {/* Reset Button */}
          <button
            type="reset"
            className="w-full bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
          >
            Clear Form
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
