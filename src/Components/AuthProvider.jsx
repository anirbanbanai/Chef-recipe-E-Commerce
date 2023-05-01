import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../../firebase.confiq';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = ()=>{
    return signOut(auth)
}

useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (currentuser)=>{
setUser(currentuser)
    });
    return ()=>{
        unSub()
    }
},[])

    const authInfo = {
        user,
     createUser,
     loginUser,
     logOut,
    }
    return <AuthContext.Provider value={authInfo}>
{children}
    </AuthContext.Provider>
};

export default AuthProvider;