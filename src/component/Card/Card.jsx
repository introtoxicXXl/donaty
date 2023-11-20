import React from 'react';

const Card = ({ card }) => {
    const { img, charity_name, charity_details, additional_topic, additional_details } = card;
    return (
        <div>
        <img src={img} alt="" />
        <h1>{charity_name}</h1>
        <p>{additional_details}</p>
        </div>
    );
};

export default Card;