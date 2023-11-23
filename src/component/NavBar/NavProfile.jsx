import { Link } from "react-router-dom";
import useAuth from "../../Hook/hook";
import swal from "sweetalert";

const NavProfile = () => {
    const { user, handleSignOut, donate, handleAddAmount } = useAuth();
    const name = user.email.split('')[0].toUpperCase();

    const handleLogOut = () => {
        handleSignOut()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleAddMoney = () => {
        swal({
            content: {
                element: "input",
                attributes: {
                    placeholder: "Add Your Money",
                    type: "number",
                },
            },
        })
            .then((value) => {
                if (value) {
                    handleAddAmount(parseInt(value))
                }
            });
    };


    return (
        <div className="dropdown dropdown-end z-20">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className=" rounded-full">
                    {
                        user.photoURL ? <img src={user.photoURL} />
                            :
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                    <span>{name}</span>
                                </div>
                            </div>

                    }
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Available Amount ${donate}</a></li>
                <li><a onClick={handleAddMoney}>Add Money</a></li>
                <li className="md:hidden block">
                    <Link to='/dashboard' className="block py-2 px-3 rounded" aria-current="page">Dashboard</Link>
                </li>
                <li onClick={handleLogOut}><a>Logout</a></li>
            </ul>
        </div>
    );
};

export default NavProfile;