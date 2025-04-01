import { createContext, useContext } from 'react';
import { useGameState } from '../../hooks';
import { ScreenContextType } from '../types';
import { MainMenu, HUD, PauseMenu, ScreenLayout } from '../../components';
import { GameCanvasWithLifecycle } from '../../systems/game/GameCanvasWithLifecycle';
import { usePauseState } from '../../hooks/usePauseState';

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export const ScreenProvider = () => {
  const { currentScene } = useGameState();
  const isPaused = usePauseState();

  return (
    <ScreenContext.Provider value={{ currentScene }}>
      <ScreenLayout>
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
        </div>
      </ScreenLayout>
    </ScreenContext.Provider>
  );
};

export const useScreen = (): ScreenContextType => {
  const context = useContext(ScreenContext);
  if (!context) throw new Error('useScreen must be used within a ScreenProvider');
  return context;
};
