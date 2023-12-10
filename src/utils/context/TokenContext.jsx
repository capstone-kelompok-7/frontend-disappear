import React, { createContext, useContext, useState, useEffect } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [tokenLocal, setTokenLocal] = useState(
    localStorage.getItem("accessToken") ?? null
  );
  const [tokenSession, setTokenSession] = useState(
    sessionStorage.getItem("accessToken") ?? null
  );
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedTokenSession = sessionStorage.getItem("accessToken");
    if (storedToken) {
      setTokenLocal(storedToken);
    }
    if (storedTokenSession) {
      setTokenSession(storedTokenSession);
    }
  }, []);

  const saveTokenAndUser = (newToken, newUser) => {
    setTokenLocal(newToken);
    setUser(newUser);
    localStorage.setItem("accessToken", newToken);
  };

  const saveTokenToSessionAndUser = (newToken, newUser) => {
    setTokenSession(newToken);
    setUser(newUser);
    sessionStorage.setItem("accessToken", newToken);
  };

  return (
    <TokenContext.Provider
      value={{
        tokenLocal,
        tokenSession,
        user,
        saveTokenAndUser,
        saveTokenToSessionAndUser,
      }}
    >
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
