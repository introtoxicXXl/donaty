import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from './../Hook/hook';
import SocialUser from "../component/SocialUser/SocialUser";


const Registration = () => {
    const { handleSignIn, updateUser } = useAuth();

    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleSignIn(email, password)
            .then(res => {
                console.log(res.user)
                updateUser(name, url)
                    .then((res) => {
                        console.log(res)
                    })
                    .catch(err => {

                    })
            })
            .catch(err => {
                console.log(err)
            })



    }


    return (
        <div className="hero min-h-screen">
            <Helmet><title>Registration</title></Helmet>
            <div className="card">
                <div className="card-body shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistration} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input
                                type="url"
                                name="url"
                                placeholder="Photo Url"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-info text-white">Login</button>
                        </div>
                        <p>Already have an account? <Link to='/login' className="hover:underline text-info">Login</Link></p>
                    </form>
                    <SocialUser></SocialUser>
                </div>
            </div>
        </div>
    );
};

export default Registration;