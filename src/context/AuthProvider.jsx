import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../util/LoggedInUserData";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const { isLoggedIn } = getLocalStorage();
    return isLoggedIn;
  });

  const [userData, setUserData] = useState(() => {
    const { userData } = getLocalStorage();
    return userData;
  });

  const [userList, setUserList] = useState(() => {
    const { userList } = getLocalStorage();
    return userList;
  });

  useEffect(() => {
    if (!userData || !isLoggedIn || !userList) {
      setLocalStorage();
    }
  }, [userData, isLoggedIn, userList]);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        isLoggedIn,
        setIsLoggedIn,
        userList,
        setUserList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
