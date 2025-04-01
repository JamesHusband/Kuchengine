import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="w-[1024px] h-[768px] bg-gray-900 relative overflow-hidden">{children}</div>
    </div>
  );
};
