import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        color: 'white',
        background: '#444',
        border: 'none',
        padding: '8px',
        marginRight: '8px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
