import { type ReactElement } from 'react';
import { ScreenLayout } from '@kuchen/ui-kit';
import { GameContainer } from '@kuchen/gui';
import { useGameState, usePauseState } from '@kuchen/game';
import { GuiRenderer } from '@kuchen/gui';
import { ScreenContext } from '@kuchen/scenes';

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
