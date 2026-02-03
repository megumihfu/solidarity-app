import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateAssociationPage from "./pages/CreateAssoPage";
import CreateInfoPage from "./pages/CreateInfoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/associations/new" element={<CreateAssociationPage />} />
        <Route path="/infos/new" element={<CreateInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
