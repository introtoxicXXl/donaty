import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../Hook/hook";


const CardDetails = () => {
    const { handleDonate } = useAuth();
    const idx = useParams();
    const [value, setValue] = useState(0);
    const [detail, setDetail] = useState({});
    const { country, amount, target_amount, img, charity_name, charity_details, additional_topic, additional_details, id } = detail;
    useEffect(() => {
        fetch('/charity.json')
            .then(res => res.json())
            .then(data => {
                const selectedDetail = data.find(item => item.id === parseInt(idx.id));
                setDetail(selectedDetail);
            }
            )
    }, [idx])

    const donationAmount = Math.round((value / 100) * (target_amount - amount) + amount);

    const handleRangeChange = (e) => {
        setValue(parseInt(e.target.value, 10));
    };

    const handleMoney = (value, name, idx) => {
        handleDonate(value, name, idx)
    }
    return (
        <div className="hero min-h-screen">
            <div>
                <h1 className="md:text-5xl text-3xl font-bold text-center mb-4">{charity_name}</h1>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="md:max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-6 text-justify">{charity_details}</p>
                        <div className="w-11/12 mx-auto space-y-2">
                            <h4 className='font-medium md:text-xl text-base'>Country: <span className=" text-myColor">{country}</span></h4>
                            <h4 className='font-medium md:text-xl text-sm'>Target Amount For This Month: <span className=" text-myColor"> ${target_amount}</span></h4>
                            <div className="md:w-2/3">
                                <div className='flex justify-between mt-6'>
                                    <span className='font-semibold'>${donationAmount}</span>
                                    <span className='text-[#8A8A8A]'>${target_amount}</span>
                                </div>
                                <input
                                    type="range"
                                    min={0} max="100"
                                    value={value}
                                    className="range range-info range-xs"
                                    onChange={handleRangeChange}
                                />
                            </div>
                        </div>
                        <button className="btn md:btn-md btn-sm btn-info text-white mt-4" onClick={() => handleMoney(donationAmount, charity_name, id)}>Donate</button>
                    </div>
                </div>
                <div className="space-y-3 container mx-auto mt-10">
                    <h1 className="md:text-4xl text-2xl font-medium md:text-left text-center">We working on {additional_topic} in <span className='text-myColor'>{country}</span></h1>
                    <p className="md:text-lg text-sm text-justify px-2">{additional_details}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
