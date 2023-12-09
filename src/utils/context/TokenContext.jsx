import React, { createContext, useContext, useState, useEffect } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("accessToken") ?? null
  );
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const saveTokenAndUser = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
    sessionStorage.setItem("accessToken", newToken);
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
