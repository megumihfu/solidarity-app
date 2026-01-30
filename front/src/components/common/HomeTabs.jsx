import React, { useState } from "react";
import SearchBar from "../associations/SearchBar";
import AssociationList from "../associations/AssociationList";
import InfoCard from "../infos/InfoCard";

const HomeTabs = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  const [searchParams, setSearchParams] = useState({ name: "", tag: "", city: "" });

  const infos = [
    { id: 1, title: "How to register", content: "You can register as a volunteer or an association.", link: "https://somelink.fr" },
    { id: 2, title: "Samu Guidelines", content: "Some content." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <header className="text-center space-y-2 mb-4">
        <h2
          className="text-4xl font-extrabold"
          style={{ color: 'var(--text-primary)' }}
        >
          Find help <span style={{ color: 'var(--accent-primary)' }}>near you</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Search for social aid in France.
        </p>
      </header>
      
      {/* tabs */}
      <div className="flex space-x-8 mb-6 border-b border-slate-200">
        {["home", "infos"].map((tab) => {
            const isSelected = selectedTab === tab;
            return (
            <div
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`cursor-pointer pb-2 font-semibold transition-colors ${
                isSelected
                    ? 'text-[var(--accent-primary)] border-b-2 border-[var(--accent-primary)]'
                    : 'text-[var(--text-secondary)] border-b-2 border-transparent hover:text-[var(--accent-primary)]'
                }`}
            >
                {tab === "home" ? "Home" : "Infos"}
            </div>
            );
        })}
      </div>

      {selectedTab === "home" && (
        <div className="space-y-6">
            <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
            <AssociationList searchParams={searchParams} />
      </div>
      )}

      {selectedTab === "infos" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {infos.map((info) => (
            <InfoCard key={info.id} {...info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeTabs;
