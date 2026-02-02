import React from 'react';
import Button from '../common/Button';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ searchParams, setSearchParams, onSearch }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 p-3 rounded-2xl shadow-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <input
        name="name"
        value={searchParams.name}
        onChange={handleChange}
        placeholder="Association name"
        className="flex-1 px-4 py-3 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[var(--accent-primary)] transition-all outline-none bg-[var(--bg-primary)] text-[var(--text-primary)]"
      />

      <select
        name="tag"
        value={searchParams.tag}
        onChange={handleChange}
        className="flex-1 px-4 py-3 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[var(--accent-primary)] outline-none appearance-none cursor-pointer bg-[var(--bg-primary)] text-[var(--text-primary)]"
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
        className="flex-1 px-4 py-3 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[var(--accent-primary)] outline-none bg-[var(--bg-primary)] text-[var(--text-primary)]"
      />

      <Button
        variant='primary'
        onClick={onSearch}
        isPrimary={true}
        className="px-4 py-3 flex items-center justify-center"
      >
        <FiSearch className="w-5 h-5 text-white" />
      </Button>
    </div>
  );
};

export default SearchBar;
