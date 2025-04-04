import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="w-[1024px] h-[768px] relative">{children}</div>
    </div>
  );
};
