import React, { useState } from "react";
import Button from "./Button";

const AuthCard = ({ title, subtitle, submitLabel, onSubmit }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
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
        <p
          className="text-sm mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
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

        <Button isPrimary={true} className="w-full py-3 font-semibold">
          {submitLabel}
        </Button>
      </form>
    </div>
  );
};

export default AuthCard;
