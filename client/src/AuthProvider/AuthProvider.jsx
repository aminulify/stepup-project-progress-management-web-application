import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    const updateUser = (name, photo) =>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
        .then(()=>{
            // profile updated 
        }).catch(err => {
            // showing issues if perfectly not works 
        })
    }

    const sendEmailVerificationCode = () =>{
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
        
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
        
    }

    const googleAuthentication = () =>{
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
        
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false);
            setUser(currentUser);  
        })
        return () => {
            setLoading(false);
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signInUser,
        updateUser,
        sendEmailVerificationCode,
        logOut,
        googleAuthentication
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}



export {AuthProvider, AuthContext};