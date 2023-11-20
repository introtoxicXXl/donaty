import { PropTypes } from 'prop-types';

const Card = ({ card }) => {
    const { img, charity_name, charity_details, additional_topic, additional_details } = card;
    return (
  
    );
};

Card.propTypes = {
    card: PropTypes.object,
};

export default Card;