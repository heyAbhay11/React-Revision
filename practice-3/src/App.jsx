import React, { useState } from 'react'

const App = () => {
  const [name, setname] = useState('');
  const [age, setAge] = useState('');
  const [store, setStore] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = [...store]
    data.push({ name, age })
    setStore(data);

    setname('');
    setAge('');
  }

  return (
    <div className='p-10' >
      <form onSubmit={submitHandler} className='flex flex-col p-2 bg-gray-600 h-60  w-70 gap-5 justify-center rounded-2xl items-center'>
        <div>
          <h1 className='text-lg'>Name *</h1>
          <input value={name} onInput={(e) => { setname(e.target.value) }} type="text" placeholder='Enter your Name' />
        </div>

        <div>
          <h1 className='text-xl' >Age*</h1>
          <input value={age} onInput={(e) => { setAge(e.target.value) }} type="number" placeholder="Enter your Age" />
        </div>

        <button className='text-center active:scale-95 w-20 h-8 rounded-2xl mt-4 bg-red-700'>Submit</button>
      </form>

      <div>
      {store.map((item)=>(
        <div className='bg-gray-600 w-70  h-20 mt-5 rounded-2xl flex flex-col justify-center items-center' key={item.name}>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
        </div>
      ))}
      </div>

    </div>
  )
}

export default App
