import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase/firebase.Config"
import { useNavigate } from "react-router";

export function useAuth() {
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/Home");
        const uid = user.uid;
        console.log("entry", uid)
      } else {
        navigate("/");
      }
    });
    // eslint-disable-next-line
  }, []);
  }

  
  /*
  export function useAuth() {
  let navigate = useNavigate();
    const [ currentUser, setCurrentUser ] = useState();
  
    useEffect(() => {
      onAuthStateChanged(auth, user =>{
        if (user) {
          navigate("/home")
          return setCurrentUser(user)
       }else {
        navigate("/");
      } 
      })                     
    }, [])
  
    return currentUser;
  }
  */