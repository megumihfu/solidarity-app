import { useState } from "react";
import NavBar from "../components/common/NavBar";
import AuthCard from "../components/common/AuthCard";
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/authService"; 

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (form, emailError) => {
    if (emailError) {
      setError(emailError);
      return;
    }

    setError(null);
    try {
      await login(form);
      navigate("/"); 
    } catch (err) {
      console.error("Login failed", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <NavBar />

      <main className="flex justify-center items-center px-4 py-12">
        <AuthCard
          title="Welcome back !"
          subtitle="Login to continue"
          submitLabel="Login"
          onSubmit={handleLogin}
          error={error}
        />
      </main>
    </div>
  );
};

export default LoginPage;
