
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Singlegenre from "../Pages/SinleGenre/Singlegenre";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children : [
            {
                index: true,
                element:<Home/>
            },
            {
                path:"/portraits",
                element: <Singlegenre title = 'portrait'/>
            },
            {
                path:"/nature",
                element: <Singlegenre title = 'nature'/>
            },
            {
                path:"/urban",
                element: <Singlegenre title = 'urban'/>
            },
            {
                path:"/portfolio",
                element: <Portfolio/>
            }
        ]
    }
])