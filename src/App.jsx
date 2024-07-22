import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Shared/Navbar'

function App() {

  return (
    <div className=''>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
