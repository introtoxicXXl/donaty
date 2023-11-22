import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from './../Hook/hook';
import SocialUser from "../component/SocialUser/SocialUser";
import { IoEye, IoEyeOff } from "react-icons/io5";
import swal from "sweetalert";
import { useState } from "react";


const Registration = () => {
    const { handleSignIn, updateUser } = useAuth();
    const [check, setCheck] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        if (password.length < 6) {
            swal('Password Must Be 6 Character', {
                buttons: false,
                timer: 2000,
                className: "bg-red-200"
            });
            return;
        }

        if (!/[A-Z]/.test(password)) {
            swal('Password Must Be Minimum 1 Capital Letter', {
                buttons: false,
                timer: 2000,
                className: "bg-red-200"
            });
            return;
        }
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            swal('Password Must Be 1 Special Character', {
                buttons: false,
                timer: 2000,
                className: "bg-red-200"
            });
            return;
        }


        handleSignIn(email, password)
            .then(res => {
                swal('', `Welcome to Donaty ${name}`, 'success');
                navigate(location?.state ? location.state : '/')
                updateUser(name, url)
                    .then(() => {

                    })
                    .catch(err => {
                        swal('Opps', `${err.message}`, {
                            buttons: false,
                            timer: 2000,
                            className: "bg-red-200"
                        });
                    })
            })
            .catch(err => {
                swal('Opps', `${err.message}`, {
                    buttons: false,
                    timer: 2000,
                    className: "bg-red-200"
                });
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
                                <a className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-info text-white">Registration</button>
                        </div>
                        <p className="mt-3 text-sm text-center">Already have an account? <Link to='/login' className="hover:underline text-info">Login</Link></p>
                    </form>
                    <SocialUser></SocialUser>
                </div>
            </div>
        </div>
    );
};

export default Registration;