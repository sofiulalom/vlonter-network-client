import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);
    const googleProvider=(Provider)=>{
        setLoading(true)
        return signInWithPopup(auth, Provider)
    }
    const createSignUp=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const UserLOgin= (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        localStorage.removeItem('volenter-token');
        return signOut(auth);
    }
    useEffect(()=>{
      const  unSubsCribe=onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
         })
         return ()=>{
            unSubsCribe()
         }
    },[])
    const authInfo={user,logOut,loading, createSignUp, UserLOgin, googleProvider}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;