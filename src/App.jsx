import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './component/NavBar/NavBar'

function App() {

  return (
    <div className='font-outfit'>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
