import NavBar from "../components/common/NavBar";
import AuthCard from "../components/common/AuthCard";

const RegisterPage = () => {
  const handleRegister = (form) => {
    console.log("REGISTER", form);
    // @todo auth register
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
        />
      </main>
    </div>
  );
};

export default RegisterPage;
