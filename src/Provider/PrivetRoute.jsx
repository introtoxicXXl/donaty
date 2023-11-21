
import { PropTypes } from 'prop-types';
import useAuth from './../Hook/hook';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../component/Loader/Loader';

const PrivetRoute = ({ children }) => {
    const location = useLocation();
    const { user, loader } = useAuth();
    if (loader) {
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login' />
    }
    return children
};
PrivetRoute.propTypes = {
    children: PropTypes.node
}
export default PrivetRoute;