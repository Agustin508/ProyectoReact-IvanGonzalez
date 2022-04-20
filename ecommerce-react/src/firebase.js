// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsyjIfQQmVF9rr9TLw2j2Uud5Pd9DQd1k",
  authDomain: "ecommerce-react-955fa.firebaseapp.com",
  projectId: "ecommerce-react-955fa",
  storageBucket: "ecommerce-react-955fa.appspot.com",
  messagingSenderId: "509423888541",
  appId: "1:509423888541:web:ab0a13e6473373d5dc8c74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db