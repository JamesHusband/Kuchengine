import { ReactNode } from 'react';

export const GuiLayout = ({ children }: { children: ReactNode }) => {
  return <div className="absolute top-[10px] left-[10px] z-10">{children}</div>;
};
