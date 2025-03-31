import { ReactNode } from 'react';

interface GameWrapperProps {
  children: ReactNode;
}

export const GameWrapper = ({ children }: GameWrapperProps) => {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="w-[1024px] h-[768px] bg-gray-900 relative overflow-hidden">{children}</div>
    </div>
  );
};
