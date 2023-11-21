import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from './Layout/Footer/Footer';


function App() {

  return (
    <div className='font-outfit'>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
AOS.init();

export default App
