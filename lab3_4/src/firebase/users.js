import { auth, firestore } from "./init";
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import {
    setDoc,
    getDoc,
    doc,
    } from "firebase/firestore";


const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const logInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;

        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {

            await setDoc(q, {
                name: user.displayName,
                authProvider: "google",
                email: user.email,
                roles: ["admin", "dog", "jedi"]
            });
}

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};

export const logInWithFacebook = async () => {
    try {
        const response = await signInWithPopup(auth, facebookProvider);
        const user = response.user;

        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {

            await setDoc(q, {
                name: user.displayName,
                authProvider: "facebook",
                email: user.email,
                roles: ["admin", "dog", "jedi"]
            });
}

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};


export const logout = () => {
    signOut(auth);
};

// import {
//     setDoc,
//     getDoc,
//     doc,
//     } from "firebase/firestore";
        