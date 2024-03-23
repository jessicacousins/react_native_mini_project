import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost/api/auth/login", {
        email,
        password,
      });
      if (response.data === "Login successful") {
        setUser({ email });
      } else {
        console.error("Login failed:", response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
