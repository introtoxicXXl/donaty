
import { PropTypes } from 'prop-types';

const Span = ({text}) => {
    return (
        <span className="text-myColor lg:text-lg md:text-base text-xs font-semibold">
          {text}  
        </span>
    );
};
Span.propTypes={
text:PropTypes.string
}

export default Span;