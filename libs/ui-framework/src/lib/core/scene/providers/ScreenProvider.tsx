import { ScreenLayout } from '@kuchen/ui-kit';
import { GameContainer } from '@core/canvas';
import { useGameState, usePauseState } from '../../game/state';
import { GuiRenderer } from '@kuchen/gui';
import { ScreenContext } from '../context';

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
