import { GameProvider, ScreenProvider } from '../../../../context';
import { GameWrapper } from '../../GameWrapper';

export const UiShell = () => {
  return (
    <GameProvider>
      <GameWrapper>
        <ScreenProvider />
      </GameWrapper>
    </GameProvider>
  );
};
