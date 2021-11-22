import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase/firebase.Config.js";


/* export async function Login (loginEmail, loginPassword) {
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
 */
export function Login (email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}