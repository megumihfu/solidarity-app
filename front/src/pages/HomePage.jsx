import React from "react";
import NavBar from "../components/common/NavBar";
import HomeTabs from "../components/common/HomeTabs";

const HomePage = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
      }}
    >
      <NavBar />
      <HomeTabs />
    </div>
  );
};

export default HomePage;
