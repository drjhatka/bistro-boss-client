import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultErrorPage from './Components/Errors/DefaultErrorPage.jsx'
import Home from './Components/Home/Home.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DataProvider from './Components/Providers/DataProvider.jsx'
import OurMenu from './Components/OurMenu/OurMenu.jsx'


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <DefaultErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/our-menu',
        element: <OurMenu></OurMenu>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </DataProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
