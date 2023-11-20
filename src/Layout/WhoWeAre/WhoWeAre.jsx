import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
    const lis = [
        'Support people in extreme need',
        'Largest global crowdfunding community',
        'Make the world a better place',
        'Share your love for community'
    ]
    return (
        <div className="flex justify-between container md:flex-row flex-col mx-auto mt-12 h-screen">
            <div className="relative basis-1/2 flex justify-center items-center">
                <div className="lg:w-11/12 md:w-10/12 w-full md:block grid grid-cols-2 gap-2">
                    <img className="grayscale hover:grayscale-0 rounded-lg w-full" src="https://i.ibb.co/85B7GXS/ef759952717696387ad1468af8ab1204.jpg" alt="" />
                    <img className="md:absolute relative w-full lg:w-64 md:w-52 h-fit bg-center lg:bottom-14 md:bottom-20 right-0 rounded-lg" src="https://i.ibb.co/09b7Ngd/fa6c7fa47516dbeeefeae7e2be0f2014.jpg" alt="" />
                </div>
            </div>
            <div className="basis-1/2 flex justify-center items-center lg:px-9 md:px-5">
                <div className="lg:space-y-5 md:space-y-3 space-y-2">
                    <span className="text-myColor lg:text-xl md:text-base font-semibold">Who we are</span>
                    <h1 className="lg:text-4xl md:text-2xl font-semibold">We are Non-Profit Charity & NGO Organization</h1>
                    <div className="divider divider-info w-1/12"></div>
                    <p className="lg:text-xl md:text-base text-sm">Join us and make your life more valuable and useful, be a part of us and contribute to the nation and state and the simplest for the environment and yourself</p>
                    <ul>
                        {
                            lis.map((li, inx) => <li key={inx} className="flex items-center font-semibold lg:text-lg md:text-sm text-[10px]"><FaCheckCircle  className="mr-2 text-[#1AD0D1]"/>{li}</li>)
                        }
                    </ul>
                    <Link to='/about'><button className="btn mt-4 md:btn-md btn-sm btn-info text-white">About Us</button></Link>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;