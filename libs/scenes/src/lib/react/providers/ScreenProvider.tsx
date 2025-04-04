import { type ReactElement } from 'react';
import { ScreenLayout } from '@kuchen/ui-kit';
import { GameContainer } from '@core/canvas';
import { useGameState, usePauseState } from '@kuchen/game';
import { GuiRenderer } from '@kuchen/gui';
import { ScreenContext } from '../context/ScreenContext';

export const ScreenProvider = (): ReactElement => {
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
