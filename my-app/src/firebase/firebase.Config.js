import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD8mf1mQBwboJOtV0BTdqSL5pV-1rAN3zA",
  authDomain: "react-bq.firebaseapp.com",
  projectId: "react-bq",
  storageBucket: "react-bq.appspot.com",
  messagingSenderId: "349142702538",
  appId: "1:349142702538:web:dd1abdde62362e9a071733"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const db = getFirestore(app);


