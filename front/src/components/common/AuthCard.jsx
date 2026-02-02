import React, { useState } from "react";
import Button from "./Button";

const AuthCard = ({ title, subtitle, submitLabel, onSubmit , error, showUsername = false}) => {
  const [form, setForm] = useState({ userName: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.includes("@") || !form.email.split("@")[1]?.includes(".")) {
      if (typeof onSubmit === "function") {
        onSubmit(null, "Please enter a valid email address");
      }
      return;
    }
  
    if (typeof onSubmit === "function") { //ok
      onSubmit(form);
    }
  };

  return (
    <div
      className="w-full max-w-md p-6 rounded-2xl border shadow-sm"
      style={{
        background: 'var(--bg-primary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <h1 className="text-2xl font-extrabold mb-2">
        {title}
      </h1>

      {subtitle && (
        <p className="text-sm mb-6 text-secondary">
        {subtitle}
      </p>
      )}

      {error && (
        <p className="text-sm mb-3 italic text-error">
        {error}
      </p>
      
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {showUsername && (
          <input
            type="text"
            name="userName"
            required
            placeholder="Username"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border outline-none transition"
            style={{
              background: 'var(--bg-primary)',
              borderColor: 'var(--border-subtle)',
            }}
          /> 
        )}

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border outline-none transition"
          style={{
            background: 'var(--bg-primary)',
            borderColor: 'var(--border-subtle)',
          }}
        />

        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border outline-none transition"
          style={{
            background: 'var(--bg-primary)',
            borderColor: 'var(--border-subtle)',
          }}
        />

        <Button 
          variant="primary"
          className="w-full py-3 font-semibold"
        >
          {submitLabel}
        </Button>
      </form>
    </div>
  );
};

export default AuthCard;
