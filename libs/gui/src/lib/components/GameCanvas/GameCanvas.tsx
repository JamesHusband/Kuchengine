import React, { RefObject } from 'react';

interface GameCanvasProps {
  gameRef: RefObject<HTMLDivElement | null>;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({ gameRef }) => {
  return <div ref={gameRef} style={{ width: '100%', height: '100%' }} />;
};
