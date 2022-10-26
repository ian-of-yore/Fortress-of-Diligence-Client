import React from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, signInWithPopup } from "firebase/auth";
import { createContext } from 'react';


const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const signInProvider = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const authInfo = { signInProvider }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;