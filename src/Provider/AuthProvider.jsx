import PropTypes from 'prop-types';

import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(true);

    const authInfo = {
        user,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;