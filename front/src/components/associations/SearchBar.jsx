import React from 'react';

const SearchBar = ({ searchParams, setSearchParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 rounded-2xl shadow-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      
      <div className="relative">
        <input
          name="name"
          value={searchParams.name}
          onChange={handleChange}
          placeholder="Association name"
          className="w-full px-4 py-3 pl-10 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[var(--accent-primary)] transition-all outline-none bg-[var(--bg-primary)] text-[var(--text-primary)]"
        />
      </div>

      <select
        name="tag"
        value={searchParams.tag}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[var(--accent-primary)] outline-none appearance-none cursor-pointer bg-[var(--bg-primary)] text-[var(--text-primary)]"
      >
        <option value="">Categories</option>
        <option value="FOOD">Food</option>
        <option value="SHELTER">Shelter</option>
        <option value="HYGIENE">Hygiene</option>
        <option value="HEALTHCARE">Healthcare</option>
        <option value="EDUCATION">Education</option>
        <option value="OTHER">Other</option>
      </select>

      <input
        name="city"
        value={searchParams.city}
        onChange={handleChange}
        placeholder="City (ex: Paris)"
        className="w-full px-4 py-3 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[var(--accent-primary)] outline-none bg-[var(--bg-primary)] text-[var(--text-primary)]"
      />
    </div>
  );
};

export default SearchBar;
