import React from 'react';
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATWP0nbW00yKeBk-OJWfCyUhyPsySauck",
    authDomain: "good-place-camp.firebaseapp.com",
    projectId: "good-place-camp",
    storageBucket: "good-place-camp.appspot.com",
    messagingSenderId: "877355439648",
    appId: "1:877355439648:web:220ab128eb578e19790e45",
    measurementId: "G-B1LXHLE7PW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = res.user;
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

const logout = async () => {
    await signOut(auth);
};