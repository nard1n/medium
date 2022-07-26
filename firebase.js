// Import the functions you need from the SDKs you need
import { getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOZ1_oRa7vI8jkM6u9oVypflv9aPTYz6s",
  authDomain: "mediumpoi-clone.firebaseapp.com",
  projectId: "mediumpoi-clone",
  storageBucket: "mediumpoi-clone.appspot.com",
  messagingSenderId: "501591105609",
  appId: "1:501591105609:web:9c22f6679ddeee6b7e9f98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }