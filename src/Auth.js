import React, { useEffect, useState } from "react";
import app,{auth} from "./base.js";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth,(user) => {
      setCurrentUser(user)
      setPending(false)
    });
    return unsubscribe
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
