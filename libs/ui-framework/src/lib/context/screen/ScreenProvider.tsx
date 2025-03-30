import { ReactNode } from 'react';
import { useGame } from '../game/GameProvider';
import { MainMenu, HUD, PauseMenu } from '../../components';
import { GameCanvasWithLifecycle } from '../../systems/game/GameCanvasWithLifecycle';
import { usePauseState } from '../../hooks/usePauseState';

export const ScreenProvider = ({ children }: { children?: ReactNode }) => {
  const { currentScene } = useGame();
  const isPaused = usePauseState();

  return (
    <div className="relative w-full h-full">
      <GameCanvasWithLifecycle />

      {currentScene === 'MainMenuScene' && (
        <div className="absolute inset-0 z-10">
          <MainMenu />
        </div>
      )}

      {currentScene === 'GameScene' && (
        <>
          <div className="absolute top-0 left-0 z-10">
            <HUD />
          </div>
          {isPaused && (
            <div className="absolute inset-0 z-20">
              <PauseMenu />
            </div>
          )}
        </>
      )}

      {children}
    </div>
  );
};
