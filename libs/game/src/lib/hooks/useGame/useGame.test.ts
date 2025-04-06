import { renderHook } from '@testing-library/react';
import { useGame } from './useGame';
import { createInstance, shutdownInstance } from '@kuchen/game';

jest.mock('@kuchen/game', () => ({
  createInstance: jest.fn(),
  shutdownInstance: jest.fn(),
}));

describe('useGame', () => {
  let mockRef: { current: HTMLDivElement | null };

  beforeEach(() => {
    jest.clearAllMocks();
    mockRef = { current: document.createElement('div') };
  });

  it('should call createInstance when mounted with a valid ref', () => {
    renderHook(() => useGame(mockRef));
    expect(createInstance).toHaveBeenCalledWith(mockRef.current);
  });

  it('should not call createInstance when mounted with a null ref', () => {
    mockRef.current = null;
    renderHook(() => useGame(mockRef));
    expect(createInstance).not.toHaveBeenCalled();
  });

  it('should call shutdownInstance when unmounted', () => {
    const { unmount } = renderHook(() => useGame(mockRef));
    unmount();
    expect(shutdownInstance).toHaveBeenCalled();
  });

  it('should not call createInstance multiple times on re-render', () => {
    const { rerender } = renderHook(() => useGame(mockRef));
    rerender();
    expect(createInstance).toHaveBeenCalledTimes(1);
  });

  it('should maintain initialization state during re-renders', () => {
    const { rerender } = renderHook(() => useGame(mockRef));
    rerender();
    rerender();
    expect(createInstance).toHaveBeenCalledTimes(1);
  });
});
