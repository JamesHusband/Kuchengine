import { createContext } from 'react';
import { useGameState } from '../../state';
import { ScreenContextType } from '../../context/types';
import { MainMenu, HUD, PauseMenu } from '../../../gui';
import { ScreenLayout } from '../../../';
import { GameCanvasWithLifecycle } from '../../cotainers';
import { usePauseState } from '../../state';

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export const ScreenProvider = () => {
  const { currentScene } = useGameState();
  const isPaused = usePauseState();

  return (
    <ScreenContext.Provider value={{ currentScene }}>
      <ScreenLayout>
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
        <GameCanvasWithLifecycle />
      </ScreenLayout>
    </ScreenContext.Provider>
  );
};
