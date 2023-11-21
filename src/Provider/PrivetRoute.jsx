
import { PropTypes } from 'prop-types';
import useAuth from './../Hook/hook';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user } = useAuth();
    if (user) {
        return children
    }
    return <Navigate to='/login' />
};
PrivetRoute.propTypes = {
    children: PropTypes.node
}
export default PrivetRoute;