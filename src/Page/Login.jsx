import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../Hook/hook";


const Login = () => {
    const { handleLogin } = useAuth();

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err)
            })

    }



    return (
        <div className="hero min-h-screen">
            <Helmet><title>Login</title></Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
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
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
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
                        <p>Do not have an account? <Link to='/registration' className="hover:underline text-info">Registration</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;