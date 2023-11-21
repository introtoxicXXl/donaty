import { PropTypes } from 'prop-types';
import { useState } from 'react';

const Card = ({ card }) => {
    const [value, setValue] = useState(0);
    const { img, charity_name, amount, target_amount } = card;
    const donationAmount = Math.round((value / 100) * (target_amount - amount) + amount);

    const handleRangeChange = (e) => {
        setValue(parseInt(e.target.value, 10));
    };


    return (
        <div className="card bg-base-100 shadow-xl" data-aos="fade-up" data-aos-duration='800'>
            <figure><img className='h-72 w-full' src={img} alt={charity_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{charity_name}</h2>
                <div>
                    <div className='flex justify-between'>
                        <span className='font-semibold'>${donationAmount}</span>
                        <span className='text-[#8A8A8A]'>${target_amount}</span>
                    </div>
                    <input type="range" min={0} max="100" value={value} className="range range-info range-xs" step="25" onChange={handleRangeChange} />
                </div>
                <div className="">
                    <button className="btn btn-info text-white">Donate Now</button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
};

export default Card;