import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase/firebase.Config.js";


export async function login (loginEmail, loginPassword) {
  try{
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(user);
  } catch(error){
    console.log(error.message);
  }
};