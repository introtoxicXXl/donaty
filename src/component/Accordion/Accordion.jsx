import { PropTypes } from 'prop-types';
import { useState } from 'react';

const Accordion = ({ accordion }) => {
    const [check, setCheck] = useState(false);
    const { question, answer } = accordion;

    return (
        <div className={`collapse collapse-arrow md:w-3/4 mx-auto`} >
            <input type="radio" name="my-accordion-2" checked={check ? "checked" : ""} />
            <div className={`collapse-title md:text-xl text-sm font-medium  ${check && 'shadow-xl'}`} onClick={()=>setCheck(!check)}>
                {question}
            </div>
            <div className="collapse-content">
                <p className='md:text-base text-xs bg-base-200 p-3 rounded-lg'>{answer}</p>
            </div>
        </div >
    );
};
Accordion.propTypes = {
    accordion: PropTypes.object,
}

export default Accordion;