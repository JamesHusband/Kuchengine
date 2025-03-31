import { renderHook } from '@testing-library/react';
import { useGame } from './useGame';
import { createGame, destroyGame } from '@kuchen/engine';

jest.mock('@kuchen/engine', () => ({
  createGame: jest.fn(),
  destroyGame: jest.fn(),
}));

describe('usePhaserGame', () => {
  let mockRef: { current: HTMLDivElement | null };

  beforeEach(() => {
    jest.clearAllMocks();
    mockRef = { current: document.createElement('div') };
  });

  it('should call createGame when mounted with a valid ref', () => {
    renderHook(() => useGame(mockRef));
    expect(createGame).toHaveBeenCalledWith(mockRef.current);
  });

  it('should not call createGame when mounted with a null ref', () => {
    mockRef.current = null;
    renderHook(() => useGame(mockRef));
    expect(createGame).not.toHaveBeenCalled();
  });

  it('should call destroyGame when unmounted', () => {
    const { unmount } = renderHook(() => useGame(mockRef));
    unmount();
    expect(destroyGame).toHaveBeenCalled();
  });

  it('should not call createGame multiple times on re-render', () => {
    const { rerender } = renderHook(() => useGame(mockRef));
    rerender();
    expect(createGame).toHaveBeenCalledTimes(1);
  });

  it('should maintain initialization state during re-renders', () => {
    const { rerender } = renderHook(() => useGame(mockRef));
    rerender();
    rerender();
    expect(createGame).toHaveBeenCalledTimes(1);
  });
});
