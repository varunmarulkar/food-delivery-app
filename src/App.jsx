// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import RestaurantCard from '../../Components/RestaurantCard'
// import Body from "./Components/Body.jsx";
// import Header from '../../Components/Header'
// import { Outlet } from 'react-router-dom'
// import {Provider} from 'react-redux'
// import appStore from '../../utils/appStore'

import Body from "./Components/Body"
import { useState } from "react"
import viteLogo from '/vite.svg'
import './App.css'
import RestaurantCard from "./Components/RestaurantCard"
import Header from "./Components/Header"
import { Outlet } from "react-router-dom"
import {Provider} from 'react-redux'
import appStore from '../utils/appStore.js'

function App() {
  
   return (
      <Provider store={appStore}>
      <div>
         <Header/>
         <Outlet/>
      </div>
      </Provider>
   )
}

export default App
