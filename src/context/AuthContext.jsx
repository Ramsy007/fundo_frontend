import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("authToken") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("authToken")
  );

  useEffect(() => {
    const fetchJourneyStep = async () => {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        setToken(storedToken);
        setIsAuthenticated(true);
      }
    };

    fetchJourneyStep();
  }, []);

  const login = (newToken) => {
    localStorage.setItem("authToken", newToken);
    setToken(newToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setToken("");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
