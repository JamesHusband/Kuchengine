import { renderHook, act } from '@testing-library/react';
import { systemEvents, sceneEvents } from '@kuchen/engine';
import { usePauseState } from './usePauseState';

jest.mock('@kuchen/engine', () => ({
  systemEvents: {
    on: jest.fn(),
    off: jest.fn(),
  },
  sceneEvents: {
    on: jest.fn(),
    off: jest.fn(),
  },
}));

describe('usePauseState', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with isPaused as false', () => {
    const { result } = renderHook(() => usePauseState());
    expect(result.current).toBe(false);
  });

  it('should register event listeners on mount', () => {
    renderHook(() => usePauseState());

    expect(systemEvents.on).toHaveBeenCalledTimes(2);
    expect(systemEvents.on).toHaveBeenCalledWith('game-paused', expect.any(Function));
    expect(systemEvents.on).toHaveBeenCalledWith('game-resumed', expect.any(Function));
    expect(sceneEvents.on).toHaveBeenCalledWith('scene-change', expect.any(Function));
  });

  it('should cleanup event listeners on unmount', () => {
    const { unmount } = renderHook(() => usePauseState());
    unmount();

    expect(systemEvents.off).toHaveBeenCalledTimes(2);
    expect(systemEvents.off).toHaveBeenCalledWith('game-paused', expect.any(Function));
    expect(systemEvents.off).toHaveBeenCalledWith('game-resumed', expect.any(Function));
    expect(sceneEvents.off).toHaveBeenCalledWith('scene-change', expect.any(Function));
  });

  it('should set isPaused to true when game-paused event is triggered', () => {
    const { result } = renderHook(() => usePauseState());

    const [[, pauseHandler]] = (systemEvents.on as jest.Mock).mock.calls.filter(([event]) => event === 'game-paused');

    act(() => {
      pauseHandler();
    });

    expect(result.current).toBe(true);
  });

  it('should set isPaused to false when game-resumed event is triggered', () => {
    const { result } = renderHook(() => usePauseState());

    const [[, pauseHandler]] = (systemEvents.on as jest.Mock).mock.calls.filter(([event]) => event === 'game-paused');
    act(() => {
      pauseHandler();
    });
    expect(result.current).toBe(true);

    const [[, resumeHandler]] = (systemEvents.on as jest.Mock).mock.calls.filter(([event]) => event === 'game-resumed');
    act(() => {
      resumeHandler();
    });

    expect(result.current).toBe(false);
  });

  it('should set isPaused to false when scene-change event is triggered', () => {
    const { result } = renderHook(() => usePauseState());

    const [[, pauseHandler]] = (systemEvents.on as jest.Mock).mock.calls.filter(([event]) => event === 'game-paused');
    act(() => {
      pauseHandler();
    });
    expect(result.current).toBe(true);

    const [[, sceneChangeHandler]] = (sceneEvents.on as jest.Mock).mock.calls.filter(
      ([event]) => event === 'scene-change',
    );
    act(() => {
      sceneChangeHandler();
    });

    expect(result.current).toBe(false);
  });
});
