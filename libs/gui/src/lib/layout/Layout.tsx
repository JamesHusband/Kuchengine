import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div style={{ position: 'relative' }}>{children}</div>;
};
