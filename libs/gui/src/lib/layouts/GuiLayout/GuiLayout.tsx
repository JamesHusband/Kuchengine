import { ReactNode } from 'react';

export const GuiLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 10,
      }}
    >
      {children}
    </div>
  );
};
