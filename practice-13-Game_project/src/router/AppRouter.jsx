import { createBrowserRouter } from "react-router";
import Home from "../pages/Home"
import Favourite from "../pages/Favourite";
import Games from "../pages/Games"
import MainLayout from "../layout/MainLayout";
import GamesLoader from "../service/GamesLoader";
import GamesDetails from "../pages/GamesDetails";
import GamesDetailLoader from "../service/GamesDetailLoader";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        hydrateFallbackElement:<p className="text-5xl bg-black text-white flex items-center justify-center h-screen min-w-screen ">Loading....</p>,
        children:[
            {
                index: true,
                element: <Home/>,
                loader:GamesLoader
            },

            {
                path:"/games",
                element:<Games/>
            },            

            {
                path: '/favourite',
                element: <Favourite/>
            },

             {
                path: 'gamesdetails/:id',
                element: <GamesDetails/>,
                loader: GamesDetailLoader
            }

        ]
    },


])