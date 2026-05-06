import { useRef, useState } from 'react';

export default function Form() {

    


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, age });
        setName('');
        setAge('');
    };

    return (
        <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
            >
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    User Information
                </h1>

                {/* Name Field */}
                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Enter your name
                    </label>
                    <input
                        ref={inputRef}
                        type="text"
                        id="name"
                        placeholder="Ravi"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        required
                    />
                </div>

                {/* Age Field */}
                <div className="mb-6">
                    <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                        Enter your age
                    </label>
                    <input
                        type="number"
                        id="age"
                        placeholder="20"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
