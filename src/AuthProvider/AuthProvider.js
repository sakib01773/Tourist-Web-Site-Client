import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from '../Firebase/firebase.config';

 export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }



    const googleProviderLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }


    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }


    const SignIn = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        logOut,
        googleProviderLogin,
        SignIn,
        createUser,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;