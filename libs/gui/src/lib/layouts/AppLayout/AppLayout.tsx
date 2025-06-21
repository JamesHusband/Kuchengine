import { ReactNode } from 'react';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div id="app-layout" className="flex items-center justify-center min-h-screen w-screen">
      <div className="w-[900px] h-[900px] flex items-center justify-center relative">{children}</div>
    </div>
  );
};
