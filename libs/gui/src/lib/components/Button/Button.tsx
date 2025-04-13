import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-gray-700 border-none px-4 py-2 mr-2 cursor-pointer hover:bg-gray-600 transition-colors"
    >
      {children}
    </button>
  );
};
