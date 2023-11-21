import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/hook";
import { FaGoogle } from "react-icons/fa";
import swal from "sweetalert";


const SocialUser = () => {
    const { handleGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation()

    const handleSocialSignIn = (media) => {
        media()
            .then(res => {
                swal('', `Welcome to Donaty ${res.user.displayName}`, 'success');
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                swal ( `${err.status}` ,  `${err.message}` ,  "error" )
            })
    }

    return (
        <div className="space-y-3">
            <p className='text-center text-base'>Continue with</p>
            <div className="flex items-center bg-base-200 justify-center py-2 rounded-lg cursor-pointer" onClick={() => handleSocialSignIn(handleGoogle)}>
                <FaGoogle className="mr-2" />Google
            </div>
        </div>
    );
};

export default SocialUser;