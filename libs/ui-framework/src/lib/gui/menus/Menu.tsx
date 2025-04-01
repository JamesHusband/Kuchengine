import React from 'react';

export interface MenuProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Menu = ({ title, children, className = '' }: MenuProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className={`p-6 bg-black/80 text-white border-2 border-gray-600 rounded max-w-sm ${className}`}>
        {title && <h2 className="text-2xl mb-4 text-center">{title}</h2>}
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
};
