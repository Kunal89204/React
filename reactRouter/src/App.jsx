import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'



const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: "/login",
      element: <Login/>
    }
  ])
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App
