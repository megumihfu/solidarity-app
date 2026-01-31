import NavBar from "../components/common/NavBar";
import AuthCard from "../components/common/AuthCard";

const LoginPage = () => {
  const handleLogin = (form) => {
    console.log("LOGIN", form);
    // @todo auth login
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
        />
      </main>
    </div>
  );
};

export default LoginPage;
