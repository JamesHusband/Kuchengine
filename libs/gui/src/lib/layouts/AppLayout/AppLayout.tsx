import { ReactNode } from 'react';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <div className="w-[800px] h-[800px] flex items-center justify-center relative">{children}</div>
    </div>
  );
};
