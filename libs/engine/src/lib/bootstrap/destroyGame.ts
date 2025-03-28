import { getGameInstance, destroyGameInstance } from './gameInstance';

export const destroyGame = () => {
  const game = getGameInstance();
  if (!game) return;

  destroyGameInstance();
};
