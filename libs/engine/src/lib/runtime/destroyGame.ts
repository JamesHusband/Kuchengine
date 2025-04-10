import { getGame, clearGame } from './gameInstance';

export const destroyGame = () => {
  const game = getGame();
  if (!game) return;

  game.destroy(true);
  clearGame();
};