import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
}

export const Button = ({ label, children, className = '', ...props }: ButtonProps) => {
  return (
    <button {...props} className={`px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow ${className}`}>
      {children ?? label}
    </button>
  );
};
