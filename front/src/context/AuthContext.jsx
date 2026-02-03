import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const [user, setUser] = useState({
    email: localStorage.getItem("userEmail"),
    userName: localStorage.getItem("userName"),
  });

  const login = (user) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userName", user.userName);

    setUser({ email: user.email, userName: user.userName });
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);