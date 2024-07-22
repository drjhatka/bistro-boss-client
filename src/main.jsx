import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultErrorPage from './Components/Errors/DefaultErrorPage.jsx'
import Home from './Components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <DefaultErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
