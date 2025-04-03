import { ScreenLayout } from '../../../gui/layout';
import { GameContainer } from '../../canvas/containers';
import { useGameState, usePauseState } from '../../game/state';
import { GuiRenderer } from '../../../../../../gui/src/lib/renderer/GuiRenderer';
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
