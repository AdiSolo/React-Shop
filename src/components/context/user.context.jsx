import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumenFromAuth,
} from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumenFromAuth(user);
      }
      setCurrentUser(user);
      return unsubscribe;
    });
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
