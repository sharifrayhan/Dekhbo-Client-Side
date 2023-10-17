
import app from "../firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const Context = createContext(null);
const auth = getAuth(app);

const AllContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('something happened in the on auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const toAll = {
            auth,
            user,
            loading,
    }
    return <Context.Provider value={toAll}>{children}</Context.Provider>;
};

export default AllContext;