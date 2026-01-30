import React from 'react';

const Button = ({ children, onClick, isPrimary = true, className = '' }) => {
  const variantClass = isPrimary ? 'button-primary' : 'button-secondary';

  return (
    <button
      onClick={onClick}
      className={`${variantClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
