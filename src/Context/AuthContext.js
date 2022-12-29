import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthProvider = createContext();

const auth = getAuth(app);

const AuthConText = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  //email password based authentication

  const handleCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with email and password

  const handleSignInWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google login based authentication

  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //useLogout function

  const handleUserLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch(err => console.log(err));
  };


  //watching user movement function

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    handleCreateUser,
    loading,
    handleUserLogout,
    handleGoogleLogin,
    handleSignInWithEmailAndPassword
  };

  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthConText;
