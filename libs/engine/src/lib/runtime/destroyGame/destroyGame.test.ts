import { destroyGame } from './destroyGame.js';
import { destroyGameInstance } from '../gameInstance/index.js';

jest.mock('../gameInstance/index.js', () => ({
  destroyGameInstance: jest.fn(),
}));

describe('destroyGame', () => {
  it('should destroy the game', () => {
    destroyGame();
    expect(destroyGameInstance).toHaveBeenCalled();
  });
});
