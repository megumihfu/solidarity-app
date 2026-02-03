import React, { useState } from 'react';

const AssociationForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    city: initialData.city || '',
    tag: initialData.tag || '',
    description: initialData.description || '',
    link: initialData.link || '',
    contact: initialData.contact || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
  
  const labelStyle = "block text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-1 ml-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn"> 
      
      {/* needed */}
      <div>
        <label className={labelStyle}>Association Name *</label>
        <input
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Restos du Coeur"
          className={inputStyle}
        />
      </div>

      <div>
        <label className={labelStyle}>City *</label>
        <input
          required
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="e.g. Paris"
          className={inputStyle}
        />
      </div>

      <div>
        <label className={labelStyle}>Category *</label>
        <div className="relative">
          <select
            required
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            className={`${inputStyle} appearance-none cursor-pointer pr-10`}
          >
            <option value="" disabled hidden>Select a category</option>
            <option value="FOOD">Food</option>
            <option value="SHELTER">Shelter</option>
            <option value="HYGIENE">Hygiene</option>
            <option value="HEALTHCARE">Healthcare</option>
            <option value="EDUCATION">Education</option>
            <option value="OTHER">Other</option>
          </select>
          <span className="absolute right-4 top-3 pointer-events-none text-[var(--text-secondary)] opacity-50 text-xs">▼</span>
        </div>
      </div>

      {/* optional */}
      <div>
        <label className={labelStyle}>Description (Optional)</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3" 
          placeholder="Describe the association's mission..."
          className={`${inputStyle} resize-none`}
        />
      </div>

      <div>
        <label className={labelStyle}>Website Link (Optional)</label>
        <input
          name="link"
          type="url"
          value={formData.link}
          onChange={handleChange}
          placeholder="https://some-website.com"
          className={inputStyle}
        />
      </div>

      <div>
        <label className={labelStyle}>Contact (Optional)</label>
        <input
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="e.g +33111111111"
          className={inputStyle}
        />
      </div>

      <div className="pt-2 flex flex-row gap-3"> 
        <button 
          type="button" 
          className="button-secondary flex-1 py-3 text-sm"
          onClick={() => window.history.back()}
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className="button-primary flex-[2] py-3 text-sm"
        >
          Create association
        </button>
      </div>
    </form>
  );
};

export default AssociationForm;