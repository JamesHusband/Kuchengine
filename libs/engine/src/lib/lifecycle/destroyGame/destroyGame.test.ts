import { destroyGame } from './destroyGame.js';
import { destroyGameInstance } from '../../state/gameInstance/gameInstance.js';

jest.mock('../../state/gameInstance/gameInstance', () => ({
  getGameInstance: jest.fn(() => 'some game instance'),
  destroyGameInstance: jest.fn(),
}));

describe('destroyGame', () => {
  it('should destroy the game', () => {
    destroyGame();
    expect(destroyGameInstance).toHaveBeenCalled();
  });
});
