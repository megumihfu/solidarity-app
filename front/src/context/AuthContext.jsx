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

  const login = (resBackend) => {
    if (!resBackend || !resBackend.token || !resBackend.user) {
      console.error("Invalid response from backend:", resBackend);
      throw new Error("Invalid response from backend");
    }

    const token = resBackend.token;
    const userObj = resBackend.user;

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", userObj.email);
    localStorage.setItem("userName", userObj.userName || "User");
    localStorage.setItem("token", token);

    setUser({ email: userObj.email, userName: userObj.userName });
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