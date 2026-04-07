import React from 'react'
import Card from './component/Card'
const App = () => {

  const user = [{
    url: 'https://images.unsplash.com/photo-1678630401136-9f27e5720943?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Jasmine",
    age: 27,
    city: "Rajasthan"
  },
  {
      url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Esha",
    age: 23,
    city: "Bangalore"
  },
{
    url: 'https://plus.unsplash.com/premium_photo-1697232651665-d63ff78b9b8c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Megha",
    age: 26,
    city: "Ahemedabad"
},
{
  url: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Riya",
    age: 24,
    city: "Kerala"
},
{
  url: 'https://images.unsplash.com/photo-1671398338984-27116c8bc53a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Isha",
    age: 22,
    city: "Lucknow"
}]


  return (
    <div>
      <Card data={user} />
    </div>
  )
}

export default App
