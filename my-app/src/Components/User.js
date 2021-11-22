import { auth } from "../firebase/firebase.Config";

export function authUser(){
return auth.currentUser
}