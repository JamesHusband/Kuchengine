import { GameProvider, ScreenProvider } from '../../../context';

export const UiShell = () => {
  return (
    <GameProvider>
      <ScreenProvider />
    </GameProvider>
  );
};
