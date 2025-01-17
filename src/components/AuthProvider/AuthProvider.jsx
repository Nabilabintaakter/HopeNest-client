import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    const handleSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const handleSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const handleUpdateProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const authInfo = {
        handleSignUp,
        handleLogin,
        handleGoogleSignIn,
        handleSignOut,
        user,
        setUser,
        setLoading,
        handleUpdateProfile,
        loading,
        darkModeHandler,
        dark,
        setDark
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
                setLoading(false)
            }
            else{
                setUser(null)
                setLoading(false)
            }
        });

        return () => unSubscribe(); 
    }, []);
    
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;