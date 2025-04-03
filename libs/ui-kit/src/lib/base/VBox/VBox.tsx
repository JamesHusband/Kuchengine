import React from 'react';

interface VBoxProps {
  children: React.ReactNode;
  className?: string;
}

export const VBox = ({ children, className = '' }: VBoxProps) => {
  return <div className={`flex flex-col gap-4 ${className}`}>{children}</div>;
};
