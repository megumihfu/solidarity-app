import React, { useState } from 'react';

const AssociationCard = ({ association }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
        expanded ? 'shadow-xl -translate-y-1' : 'shadow-sm hover:shadow-md'
      }`}
      style={{
        background: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
      }}
    >
      <div className="p-6 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            {/* tag */}
            <span
              className="inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                background: 'var(--tag-bg)',
                color: 'var(--tag-text)',
              }}
            >
              {association.tag}
            </span>

            <h3
              className="text-xl font-bold"
              style={{ color: 'var(--text-heading)' }}
            >
              {association.name}
            </h3>

            <p
              className="flex items-center gap-1 text-sm font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              {association.city}
            </p>
          </div>

          <div
            className="p-2 rounded-full transition-colors"
            style={{
              background: expanded
                ? 'var(--icon-bg-active)'
                : 'var(--icon-bg)',
              color: expanded
                ? 'var(--icon-text-active)'
                : 'var(--icon-text)',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform ${
                expanded ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* expand */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            expanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className="pt-6 border-t space-y-2"
            style={{ borderColor: 'var(--card-border)' }}
          >
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              Description
            </h4>
            <p className="leading-relaxed italic" style={{ color: 'var(--text-muted)' }}>
              "{association.description}"
            </p>

            {/* contact */}
            {association.contact && (
              <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                Contact: {association.contact}
              </p>
            )}

            {/* link */}
            {association.link && (
              <a
                href={association.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-primary)' }}
              >
                Visit website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociationCard;
