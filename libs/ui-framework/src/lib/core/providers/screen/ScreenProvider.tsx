import { useGameState } from '../../state';
import { ScreenLayout } from '../../../gui/layouts';
import { GameContainer } from '../../cotainers';
import { usePauseState } from '../../state';
import { GuiRenderer } from '../../GuiRenderer';
import { ScreenContext } from '../../context';

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
