import React, { ReactElement } from 'react';

export interface MenuProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

interface MenuChildProps {
  className?: string;
}

export const Menu = ({ title, children, className = '' }: MenuProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className={`bg-[#8B4513] border-4 border-[#DAA520] rounded-lg p-6 min-w-[240px] ${className}`}>
        {title && <h2 className="text-2xl text-white font-bold text-center mb-4 uppercase">{title}</h2>}
        <div className="flex flex-col gap-2">
          {React.Children.map(children, (child) => {
            if (React.isValidElement<MenuChildProps>(child)) {
              return React.cloneElement(child as ReactElement<MenuChildProps>, {
                className: `w-full py-2 px-4 bg-[#FFD700] hover:bg-[#FFC000] 
                  text-black font-bold text-center rounded
                  border-2 border-[#B8860B] shadow-md
                  transition-colors uppercase
                  ${child.props.className || ''}`,
              });
            }
            return child;
          })}
        </div>
      </div>
    </div>
  );
};
