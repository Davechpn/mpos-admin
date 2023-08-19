// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCts6I54aWCycqdckew9GeccQHTnNdpSOo",
  authDomain: "mpos-d7c8e.firebaseapp.com",
  projectId: "mpos-d7c8e",
  storageBucket: "mpos-d7c8e.appspot.com",
  messagingSenderId: "153550138241",
  appId: "1:153550138241:web:b2134d82d35e5933841680",
  measurementId: "G-Q5210MCYVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore_db = getFirestore(app);
export const auth  = getAuth(app)
export const provider = new GoogleAuthProvider()