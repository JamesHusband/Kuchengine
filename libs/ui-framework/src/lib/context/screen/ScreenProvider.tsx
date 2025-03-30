import { ReactNode } from 'react';
import { useGame } from '../game/GameProvider';
import { GameCanvas, MainMenu, HUD } from '../../components';

export const ScreenProvider = ({ children }: { children?: ReactNode }) => {
  const { currentScene } = useGame();

  return (
    <>
      <GameCanvas />

      {currentScene === 'MainMenuScene' && (
        <div className="absolute inset-0 z-10">
          <MainMenu />
        </div>
      )}

      {currentScene === 'GameScene' && (
        <div className="absolute top-0 left-0 z-10">
          <HUD />
        </div>
      )}

      {children}
    </>
  );
};
