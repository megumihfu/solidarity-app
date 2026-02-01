import { useState } from "react";
import NavBar from "../components/common/NavBar";
import AuthCard from "../components/common/AuthCard";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleRegister = async (form, emailError) => {
    if (emailError) {
      setError(emailError);
      return;
    }

    setError(null);
    try {
      const userToCreate = {
        userName: form.userName,
        email: form.email,
        password: form.password
      };
      await register(userToCreate); 
      
      navigate("/");
    } catch (err) {
      console.error("Registration failed", err);
      setError("Registration failed: maybe email already used...");
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
          title="Create an account"
          subtitle="That's one small step for man, one giant leap for mankind"
          submitLabel="Register"
          onSubmit={handleRegister}
          error={error}
        />
      </main>
    </div>
  );
};

export default RegisterPage;
