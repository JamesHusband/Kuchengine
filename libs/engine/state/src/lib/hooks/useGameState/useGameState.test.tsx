import { renderHook, act } from '@testing-library/react';
import { useGameState } from './useGameState';

let sceneChangeCallback: (scene: string) => void = () => 'test';

jest.mock('@engine/scenes', () => ({
  useSceneListener: jest.fn((callback) => {
    sceneChangeCallback = callback;
  }),
}));

describe('useGameState', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with MainMenuScene', () => {
    const { result } = renderHook(() => useGameState());
    expect(result.current.currentScene).toBe('MainMenuScene');
  });

  it('should update scene when callback is called', () => {
    const { result } = renderHook(() => useGameState());
    act(() => {
      sceneChangeCallback('GameScene');
    });
    expect(result.current.currentScene).toBe('GameScene');
  });
});
