import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);


  const getdata = async () => {
    const data = await axios.get("https://picsum.photos/v2/list",{
      params:{
        page:page,
        limit:10
      }
    })
    setdata(data.data)
  }

  useEffect(() => {
    getdata()
  }, [page])




  return (
    <div>



      <div className='mt-5 flex flex-wrap gap-5'>
        {data.map((item) => (
          <div className='w-60 h-60 bg-zinc-300 rounded-md'>
            <img className='w-20 h-20 object-cover' src={item.download_url} alt="" />
            <h1>{item.author}</h1>
          </div>
        ))}
      </div>
        <button onClick={()=>setpage(page+1)}>Next</button>
        <button onClick={()=>setpage(page-1)} >Previous</button>
    </div>
  )
}

export default App
