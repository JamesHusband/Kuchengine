import { renderHook } from '@testing-library/react';
import { useCanvas } from './useCanvas.js';
import { getInstance } from '@engine/instance';

jest.mock('@engine/instance', () => ({
  getInstance: jest.fn(),
}));

describe('useCanvas', () => {
  let containerRef: { current: HTMLDivElement | null };
  let mockCanvas: HTMLCanvasElement;

  beforeEach(() => {
    containerRef = {
      current: document.createElement('div'),
    };

    mockCanvas = document.createElement('canvas');
    
    (getInstance as jest.Mock).mockReturnValue({
      canvas: mockCanvas,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should append canvas to container when both are available', () => {
    renderHook(() => useCanvas(containerRef));
    expect(containerRef.current?.contains(mockCanvas)).toBeTruthy();
  });

  it('should not append canvas when container is null', () => {
    containerRef.current = null;
    renderHook(() => useCanvas(containerRef));
  });

  it('should not append canvas when getInstance returns null', () => {
    (getInstance as jest.Mock).mockReturnValue(null);
    renderHook(() => useCanvas(containerRef));
    expect(containerRef.current?.children.length).toBe(0);
  });

  it('should remove canvas from container on unmount', () => {
    const { unmount } = renderHook(() => useCanvas(containerRef));
    expect(containerRef.current?.contains(mockCanvas)).toBeTruthy();

    unmount();
    expect(containerRef.current?.contains(mockCanvas)).toBeFalsy();
  });

  it('should handle unmount when canvas is already removed', () => {
    const { unmount } = renderHook(() => useCanvas(containerRef));
    
    containerRef.current?.removeChild(mockCanvas);
    
    unmount();
    expect(containerRef.current?.contains(mockCanvas)).toBeFalsy();
  });
});
