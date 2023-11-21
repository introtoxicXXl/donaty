import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const [value, setValue] = useState(0);
    const { img, charity_name, amount, target_amount,id } = card;
    const donationAmount = Math.round((value / 100) * (target_amount - amount) + amount);

    const handleRangeChange = (e) => {
        setValue(parseInt(e.target.value, 10));
    };


    return (
        <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt={charity_name} />
            <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{charity_name}</h5>
                <div className='flex justify-between'>
                    <span className='font-semibold'>${donationAmount}</span>
                    <span className='text-[#8A8A8A]'>${target_amount}</span>
                </div>
                <input type="range" min={0} max="100" value={value} className="range range-info range-xs" step="25" onChange={handleRangeChange} />
                <div className='flex justify-evenly mt-3'>
                    <button className="btn btn-sm btn-info text-white">Donate</button>
                    <Link to={`/campaign/${id}`}><button className="btn btn-sm btn-outline btn-info">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
};





export default Card;