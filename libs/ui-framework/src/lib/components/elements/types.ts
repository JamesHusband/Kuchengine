import { Ref } from 'react';

export type GameCanvasProps = {
  containerRef: Ref<HTMLDivElement>;
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
}
