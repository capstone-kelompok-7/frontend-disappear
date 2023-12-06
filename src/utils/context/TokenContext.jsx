import React, { createContext, useContext, useState } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const saveTokenAndUser = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem("accessToken", newToken);
  };

  return (
    <TokenContext.Provider value={{ token, user, saveTokenAndUser }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};
