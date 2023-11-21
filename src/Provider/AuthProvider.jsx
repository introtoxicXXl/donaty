import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';

import { createContext, useEffect, useState } from "react";
import { auth } from '../Utility/firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [donate, setDonate] = useState(5000);

    // create user by email password
    const handleSignIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // create user by google
    const handleGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // update profile
    const updateUser = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    // login user
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out
    const handleSignOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return () => unSubscribe()
    }, [])





    const authInfo = {
        user,
        handleSignIn,
        handleGoogle,
        handleLogin,
        handleSignOut,
        donate,
        updateUser
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