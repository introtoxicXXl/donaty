import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube,FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import moment from "moment";



const Footer = () => {
    return (


        <footer className="bg-base-200 mt-14">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex justify-between items-center md:flex-row flex-col">
                    <div className="mb-6 md:mb-0 md:basis-1/2 basis-full">
                        <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://i.ibb.co/9pyM2Fd/Group-2355.png" className="h-8" alt="Donaty Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap font-outfit">Donaty</span>
                        </Link>
                        <p className="md:w-2/3 mt-3 text-[#6F7775]">Whatever it is that you care about, there will be a charity working on it. Charities help in lots of different ways</p>
                        <div className="flex mt-4 lg:w-1/5 md:w-2/5 w-full text-[#1AD0D1] text-xl justify-evenly">
                            <FaFacebookF /><FaTwitter /><FaInstagram /><FaYoutube />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 sm:grid-cols-2 basis-1/2">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Menu</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to='/' className="hover:underline">Home</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to='/about' className="hover:underline">About Us</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to='/campaign' className="hover:underline">Campaign</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">About Us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a  className="hover:underline ">How it work?</a>
                                </li>
                                <li className="mb-4">
                                    <a  className="hover:underline ">Contact us</a>
                                </li>
                                <li className="mb-4">
                                    <a  className="hover:underline ">FAQ</a>
                                </li>
                                <li className="mb-4">
                                    <a  className="hover:underline ">Help</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-2">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Contact Info</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4 hover:underline flex items-center">
                                  <FaPhoneAlt className="text-myColor mr-2"/>+8801611374068
                                </li>
                                <li className="mb-4 hover:underline flex items-center">
                                  <IoMdMail className="text-myColor mr-2"/>minhajulabedin648@gmail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-myColor py-3">
                <p className="text-sm text-white text-center">Donaty {moment().format('YYYY')} Ideapeel Inc. All Rights Reserved.
                </p>
            </div>
        </footer>

    );
};

export default Footer;