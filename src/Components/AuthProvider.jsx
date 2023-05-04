import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../firebase.confiq';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState();

    // if(loader){
    //     return <div>
    //         <div
    //             className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    //             role="status">
    //             <span
    //                 className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    //             >Loading...</span
    //             >
    //         </div>
    //     </div>
    // }

    const GitProvider = new GithubAuthProvider();
    const GoogleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }

    const CreateGitUser = () => {
        return signInWithPopup(auth, GitProvider);
    }

    const CreateGoogleUser = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
            setLoader(false)
        });
        return () => {
            unSub()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        loginUser,
        logOut,
        CreateGitUser,
        CreateGoogleUser,
        loader
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;