import { getGameInstance, destroyGameInstance } from '../../state';

export const destroyGame = () => {
  const game = getGameInstance();
  if (!game) return;

  destroyGameInstance();
};
