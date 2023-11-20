import { Link, NavLink } from "react-router-dom";
import StaggeredDropDown from "../DropdownMenu/StaggeredDropDown";
import './NavBar.css';
import useAuth from "../../Hook/hook";
import NavProfile from "./NavProfile";


const NavBar = () => {
    const { user } = useAuth();

    return (

        <nav className="top-0 z-10 sticky md:glass">
            <div className="absolute w-full md:glass">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://i.ibb.co/9pyM2Fd/Group-2355.png" className="h-8" alt="Donaty Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap font-outfit md:block hidden">Donaty</span>
                    </Link>
                    <div className="md:hidden flex space-x-5">
                        {user && <NavProfile></NavProfile>}
                        <StaggeredDropDown></StaggeredDropDown>
                    </div>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <NavLink to='/' className="block py-2 px-3 rounded text-[#9F5FFE]" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className="block py-2 px-3 rounded text-[#9F5FFE]" aria-current="page">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to='/campaign' className="block py-2 px-3 rounded text-[#9F5FFE]" aria-current="page">Our Campaign</NavLink>
                            </li>
                            {
                                user ?
                                    <NavProfile />
                                    :
                                    <li>
                                        <NavLink to='/login' className="block py-2 px-3 rounded text-[#9F5FFE]" aria-current="page">Login</NavLink>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;