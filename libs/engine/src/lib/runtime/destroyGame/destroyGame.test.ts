import { destroyGame } from './destroyGame.js';
import { destroyGameInstance, getGameInstance } from '../gameInstance/index.js';

jest.mock('../gameInstance/index.js', () => ({
  destroyGameInstance: jest.fn(),
  getGameInstance: jest.fn(),
}));

describe('destroyGame', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should destroy the game when it exists', () => {
    (getGameInstance as jest.Mock).mockReturnValue({});
    destroyGame();
    expect(destroyGameInstance).toHaveBeenCalled();
  });

  it('should not destroy the game when it does not exist', () => {
    (getGameInstance as jest.Mock).mockReturnValue(null);
    destroyGame();
    expect(destroyGameInstance).not.toHaveBeenCalled();
  });
});
