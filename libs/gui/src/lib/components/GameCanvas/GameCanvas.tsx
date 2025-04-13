import React, { RefObject } from 'react';

interface GameCanvasProps {
  gameRef: RefObject<HTMLDivElement | null>;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({ gameRef }) => {
  return <div ref={gameRef} className="w-full h-full" />;
};
