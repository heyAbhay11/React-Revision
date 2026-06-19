import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import Service from '../pages/Service'
import Laptop from '../pages/Laptop'
import Mobile from '../pages/Mobile'
import About from '../pages/About'
import MainLayout from '../Layout/MainLayout'




const AppRouter = createBrowserRouter([
  {
    path: '/', element: <MainLayout />,
    children:
      [{ path: 'home', element: <Home /> },
      { path: '/service', element: <Service /> },
      { path: "/laptop", element: <Laptop /> },
      { path: "mobile", element: <Mobile /> },
      { path: "about", element: <About /> }]
  },
])

export default AppRouter