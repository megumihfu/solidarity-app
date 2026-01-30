import React, { useState } from 'react';
import NavBar from '../components/common/NavBar';
import SearchBar from '../components/associations/SearchBar';
import AssociationList from '../components/associations/AssociationList';

const HomePage = () => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    tag: '',
    city: '',
  });

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
      }}
    >
      <NavBar />

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <header className="text-center space-y-2">
          <h2
            className="text-3xl font-extrabold"
            style={{ color: 'var(--text-primary)' }}
          >
            Find help <span style={{ color: 'var(--accent-primary)' }}>near you</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Search for social aid in France.
          </p>
        </header>

        <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />

        <AssociationList searchParams={searchParams} />
      </main>
    </div>
  );
};

export default HomePage;
