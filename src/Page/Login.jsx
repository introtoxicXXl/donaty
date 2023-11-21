import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hook/hook";
import SocialUser from "../component/SocialUser/SocialUser";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import swal from "sweetalert";


const Login = () => {
    const { handleLogin } = useAuth();
    const [check, setCheck] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();


    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;




        handleLogin(email, password)
            .then(res => {
                navigate(location?.state ? location.state : '/')
                swal('', `Welcome Back to Donaty ${res.user.displayName}`, 'success');
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage === 'auth/user-not-found') {
                    swal('Oops', 'User not found with provided email', 'error');

                } else if (errorMessage === 'auth/wrong-password') {
                    swal('Oops', 'Incorrect password', 'error');

                } else {
                    swal('Oops', ` Your Email or Password is Incorrect`, 'error');

                }
            })

    }



    return (
        <div className="hero min-h-screen">
            <Helmet><title>Login</title></Helmet>
            <div className="card">
                <div className="card-body shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className=" relative">
                                <input
                                    type={check ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered "
                                    required
                                />
                                <span className="absolute top-1/3 right-3 cursor-pointer" onClick={() => setCheck(!check)}>{check ? <IoEyeOff /> : <IoEye />}</span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-info text-white">Login</button>
                        </div>
                        <p className="mt-3 text-sm text-center">Do not have an account? <Link to='/registration' className="hover:underline text-info">Registration</Link></p>
                    </form>
                    <SocialUser></SocialUser>
                </div>
            </div>
        </div>
    );
};

export default Login;