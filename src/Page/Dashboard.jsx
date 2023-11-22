import { Link } from "react-router-dom";
import useAuth from "../Hook/hook";
import { getItem } from "../Utility/localStorage";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    const { user } = useAuth();
    const [donates, setDonates] = useState([]);
    const [donateItems, setDonateItems] = useState([]);

    const displayName = user.email.split('@')[0];
    const name = user.email.split('')[0].toUpperCase();

    useEffect(() => {
        fetch('/charity.json')
            .then(res => res.json())
            .then(data => setDonates(data))
    }, [])

    useEffect(() => {
        const getDonates = getItem();

        if (donates.length > 0) {
            const donateCard = donates.filter((cart) => getDonates.includes(cart.id));
            setDonateItems(donateCard);
        }
    }, [donates]);

    return (
        <div>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
            <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        {
                            user.photoURL ? <img className="mask mask-squircle" src={user.photoURL} />
                                :
                                <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content rounded-full w-12">
                                        <span>{name}</span>
                                    </div>
                                </div>

                        }
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>{user.displayName ? user.displayName : displayName}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{user?.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>{user?.phoneNumber || 'Not Found'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-10/12 mx-auto">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name of Charity</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                donateItems.map(donate => <tr className="" key={donate.id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={donate.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>

                                        <div className="flex items-center gap-3">
                                            <div className="font-bold">{donate.charity_name}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{donate.charity_details.split('.')[0]}...</p>
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <th>
                                        <Link to={`/campaign/${donate.id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;