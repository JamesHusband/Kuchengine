import { GameCanvasProps } from '../types';

export const Canvas = ({ containerRef }: GameCanvasProps) => (
  <div ref={containerRef} className="w-full h-full" tabIndex={0} data-testid="game-canvas" role="presentation" />
);
