import useAuth from "../../Hook/hook";
import { FaGoogle} from "react-icons/fa";


const SocialUser = () => {
    const { handleGoogle} = useAuth();

    const handleSocialSignIn = (media) => {
        media()
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="space-y-3">
            <p className='text-center'>Continue with</p>
            <div className="flex items-center bg-base-200 justify-center py-2 rounded-lg cursor-pointer" onClick={() => handleSocialSignIn(handleGoogle)}>
                <FaGoogle className="mr-2" />Google
            </div>
        </div>
    );
};

export default SocialUser;