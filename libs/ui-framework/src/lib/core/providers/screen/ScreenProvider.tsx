import { createContext } from 'react';
import { useGameState } from '../../state';
import { ScreenContextType } from '../../context/types';
import { ScreenLayout } from '../../../gui/layouts';
import { GameContainer } from '../../cotainers';
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
        <GameContainer />
      </ScreenLayout>
    </ScreenContext.Provider>
  );
};
