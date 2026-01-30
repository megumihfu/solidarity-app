import React from "react";

const InfoCard = ({ title, content, link }) => {
  return (
    <div
      className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-md"
      style={{
        background: 'var(--bg-primary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
        {content}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium"
          style={{ color: 'var(--accent-primary)' }}
        >
          Visit
        </a>
      )}
    </div>
  );
};

export default InfoCard;
