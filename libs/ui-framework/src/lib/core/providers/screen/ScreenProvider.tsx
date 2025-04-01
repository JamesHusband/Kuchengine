import { createContext } from 'react';
import { useGameState } from '../../state';
import { ScreenContextType } from '../../context/types';
import { MainMenu, HUD, PauseMenu } from '../../../gui';
import { ScreenLayout } from '../../../';
import { GameCanvasWithLifecycle } from '../../cotainers';
import { usePauseState } from '../../state';
import { GuiRenderer } from '../../GuiRenderer';

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export const ScreenProvider = () => {
  const { currentScene } = useGameState();
  const isPaused = usePauseState();

  return (
    <ScreenContext.Provider value={{ currentScene }}>
      <ScreenLayout>
        <GuiRenderer currentScene={currentScene} isPaused={isPaused} />
        <GameCanvasWithLifecycle />
      </ScreenLayout>
    </ScreenContext.Provider>
  );
};
