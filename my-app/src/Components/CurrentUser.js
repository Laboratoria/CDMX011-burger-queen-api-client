import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase/firebase.Config"

export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();
  
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user =>
         setCurrentUser(user));
      return unsub;
      
    }, [])
  
    return currentUser;
  }
