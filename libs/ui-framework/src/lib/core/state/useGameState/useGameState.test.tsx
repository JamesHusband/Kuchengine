import { renderHook, act } from '@testing-library/react';
import { useGameState } from './useGameState';
import { useSceneListener } from '../useScene';

let sceneChangeCallback: (scene: string) => void = () => 'test';

jest.mock('../useScene', () => ({
  useSceneListener: jest.fn((callback) => {
    sceneChangeCallback = callback;
  }),
}));

describe('useGameState', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    sceneChangeCallback = () => {
      /* no-op */
    };
  });

  it('should initialize with MainMenuScene', () => {
    const { result } = renderHook(() => useGameState());
    expect(result.current.currentScene).toBe('MainMenuScene');
  });

  it('should register scene listener', () => {
    renderHook(() => useGameState());
    expect(useSceneListener).toHaveBeenCalled();
  });

  it('should update scene when listener is called', () => {
    const { result } = renderHook(() => useGameState());

    act(() => {
      sceneChangeCallback('GameScene');
    });

    expect(result.current.currentScene).toBe('GameScene');
  });

  it('should maintain scene state between re-renders', () => {
    const { result, rerender } = renderHook(() => useGameState());

    act(() => {
      sceneChangeCallback('GameScene');
    });

    rerender();
    expect(result.current.currentScene).toBe('GameScene');
  });
});
