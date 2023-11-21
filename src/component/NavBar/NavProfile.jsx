import useAuth from "../../Hook/hook";

const NavProfile = () => {
    const { user, handleSignOut, donate } = useAuth();
    const name = user.email.split('')[0].toUpperCase();
    const displayName = user.email.split('@')[0];

    const handleLogOut = () => {
        handleSignOut()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

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
                <li>
                    <a className="justify-between">
                        {user.displayName ? user.displayName : displayName}
                    </a>
                </li>
                <li><a>Available Amount ${donate}</a></li>
                <li onClick={handleLogOut}><a>Logout</a></li>
            </ul>
        </div>
    );
};

export default NavProfile;