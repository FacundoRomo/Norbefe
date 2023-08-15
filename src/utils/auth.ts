import { user } from "./tipos";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function login (userData : user){
  const { email, password } = userData
  const firebaseConfig = {
    apiKey: "AIzaSyAK5YJQ_Wd2ODegARGACmMOXs9Lg5VC3PY",
    authDomain: "norbefe-arte.firebaseapp.com",
    databaseURL: "https://norbefe-arte-default-rtdb.firebaseio.com",
    projectId: "norbefe-arte",
    storageBucket: "norbefe-arte.appspot.com",
    messagingSenderId: "360527891411",
    appId: "1:360527891411:web:6c910e4d5981ba88e03d26",
    measurementId: "G-ZP5PEWJ8CY"
  };
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode)
      console.error(errorMessage)
    })


}