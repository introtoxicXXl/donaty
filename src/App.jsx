import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {

  return (
    <div className='font-outfit'>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}
AOS.init();

export default App
