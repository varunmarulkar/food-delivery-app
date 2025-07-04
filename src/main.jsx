import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Body from './Components/Body.jsx'
import Contact from './Components/Contact.jsx'
import Cart from './Components/Cart.jsx'
import Error from './Components/Error.jsx'
import About from './Components/About.jsx'
import SignIn from './Components/SignIn.jsx'
import RestaurantMenu from './Components/RestaurantMenu.jsx'



const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/Contact",
        element:<Contact/>,
      },
      {
        path:"/SignIn",
        element:<SignIn/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/About",
        element:<About/>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
      
      {
        path:"/rest",
        element:<Cart/>,
      }
    ],
    errorElement:<Error/>
  },
 
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)

