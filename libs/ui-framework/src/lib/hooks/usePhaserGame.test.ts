import { renderHook } from '@testing-library/react';
import { usePhaserGame } from './';
import { startGame, destroyGame } from '@kuchen/engine';

jest.mock('@kuchen/engine', () => ({
  startGame: jest.fn(),
  destroyGame: jest.fn(),
}));

describe('usePhaserGame', () => {
  let mockRef: { current: HTMLDivElement | null };

  beforeEach(() => {
    jest.clearAllMocks();
    mockRef = { current: document.createElement('div') };
  });

  it('should call startGame when mounted with a valid ref', () => {
    renderHook(() => usePhaserGame(mockRef));
    expect(startGame).toHaveBeenCalledWith(mockRef.current);
  });

  it('should not call startGame when mounted with a null ref', () => {
    mockRef.current = null;
    renderHook(() => usePhaserGame(mockRef));
    expect(startGame).not.toHaveBeenCalled();
  });

  it('should call destroyGame when unmounted', () => {
    const { unmount } = renderHook(() => usePhaserGame(mockRef));
    unmount();
    expect(destroyGame).toHaveBeenCalled();
  });

  it('should not call startGame multiple times on re-render', () => {
    const { rerender } = renderHook(() => usePhaserGame(mockRef));
    rerender();
    expect(startGame).toHaveBeenCalledTimes(1);
  });

  it('should maintain initialization state during re-renders', () => {
    const { rerender } = renderHook(() => usePhaserGame(mockRef));
    rerender();
    rerender();
    expect(startGame).toHaveBeenCalledTimes(1);
  });
});
