// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGWgHqOQq_J45JFk9n0dGMmHZ0imXU8UU",
  authDomain: "chapp-1-eb799.firebaseapp.com",
  projectId: "chapp-1-eb799",
  storageBucket: "chapp-1-eb799.appspot.com",
  messagingSenderId: "652129239644",
  appId: "1:652129239644:web:523ea1ebbd99e989651c99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)