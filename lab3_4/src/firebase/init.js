// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOpf5YMgKBOdleeEpOssTsr4TwqlWquao",
  authDomain: "piw-lab.firebaseapp.com",
  projectId: "piw-lab",
  storageBucket: "piw-lab.appspot.com",
  messagingSenderId: "658065145381",
  appId: "1:658065145381:web:8459f6b0fed21020ef09cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);