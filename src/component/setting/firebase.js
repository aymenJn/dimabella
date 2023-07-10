import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYs4cxn1T-TUkbUJA70wx8rz04G1_UA5k",
  authDomain: "tiktak-7d5c3.firebaseapp.com",
  projectId: "tiktak-7d5c3",
  storageBucket: "tiktak-7d5c3.appspot.com",
  messagingSenderId: "164938369953",
  appId: "1:164938369953:web:79a392c0bca2ac33d7d9e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app) 