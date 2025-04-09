import { GameContext, GameContextType } from './GameContext';

describe('GameContext', () => {
  it('should be defined', () => {
    expect(GameContext).toBeDefined();
  });

  it('should have correct type structure', () => {
    const mockContextValue: GameContextType = {
      currentScene: 'test-scene'
    };
    
    expect(typeof mockContextValue.currentScene).toBe('string');
  });
});
