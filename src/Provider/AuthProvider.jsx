import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { auth } from '../Utility/firebase.config';
import swal from 'sweetalert';
import { addToLs } from '../Utility/localStorage';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [donate, setDonate] = useState(5000);
    const [loader, setLoader] = useState(true);


    // create user by email password
    const handleSignIn = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // create user by google
    const handleGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }
    // update profile
    const updateUser = (name, url) => {
        setLoader(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    // login user
    const handleLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out
    const handleSignOut = () => {
        setLoader(true);
        return signOut(auth)
    }
    // handle donate money and add local storage 
    const handleDonate = (value, name, id) => {
        if (value > donate) {

            return swal('Sorry', 'Insufficient Ballance', 'error')
        }
        if (user && value <= 0) {
            return swal('Sorry', 'Please increase money', 'error')
        }
        swal('Congatuliation', `You Just Donate ${value} for ${name}`, 'success');
        setLoader(true)
        setDonate(donate - value);
        addToLs(id, value)
        setLoader(false)
    }

    // handle add amount 
    const handleAddAmount = (taka) => {
        setDonate(donate+taka)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoader(false)
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
        updateUser,
        loader,
        handleDonate,
        handleAddAmount
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