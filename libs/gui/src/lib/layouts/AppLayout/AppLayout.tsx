import { ReactNode } from 'react';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div id="app-layout" className="min-h-screen w-screen pt-8">
      <div className="w-[900px] h-[700px] relative mx-auto">{children}</div>
    </div>
  );
};
