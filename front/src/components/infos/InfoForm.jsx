import React, { useState } from "react";
import Button from "../common/Button";

const InfoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputStyle = `
    w-full 
    bg-[var(--bg-primary)] 
    border border-[var(--border-subtle)] 
    px-4 py-2.5 rounded-xl 
    focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent 
    outline-none transition-all text-sm 
    text-[var(--text-primary)] 
    placeholder:text-[var(--text-secondary)]/50
  `;

  const labelStyle =
    "block text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-1 ml-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">

      <div>
        <label className={labelStyle}>Title *</label>
        <input
          required
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Winter shelter opening"
          className={inputStyle}
        />
      </div>

      <div>
        <label className={labelStyle}>Content *</label>
        <textarea
          required
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={4}
          placeholder="Explain the information..."
          className={`${inputStyle} resize-none`}
        />
      </div>

      <div>
        <label className={labelStyle}>Link (Optional)</label>
        <input
          name="link"
          type="url"
          value={formData.link}
          onChange={handleChange}
          placeholder="https://example.com"
          className={inputStyle}
        />
      </div>

      <div className="pt-2 flex gap-3">
        <Button
          variant="secondary"
          className="flex-1 py-3 text-sm"
          onClick={() => window.history.back()}
        >
          Cancel
        </Button>

        <Button
          variant="primary"
          className="flex-[2] py-3 text-sm"
          onClick={handleSubmit}
        >
          Create info
        </Button>
      </div>
    </form>
  );
};

export default InfoForm;