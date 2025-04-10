import { ReactNode } from 'react';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return <div style={{ position: 'relative' }}>{children}</div>;
};
