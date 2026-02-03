import React from 'react';

const Button = ({
  children,
  onClick,
  variant = "primary", 
  className = ""
}) => {
  const variants = {
    primary: "button-primary",
    secondary: "button-secondary",
    error: "button-error",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
