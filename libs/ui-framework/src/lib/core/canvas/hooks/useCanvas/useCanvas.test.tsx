import { render, screen } from '@testing-library/react';
import { useRef } from 'react';
import { useCanvas } from './useCanvas';
import * as engine from '@kuchen/engine';

jest.mock('@kuchen/engine', () => ({
  getInstance: jest.fn(),
}));

const mockCanvas = document.createElement('canvas');
mockCanvas.setAttribute('id', 'game-canvas');

const TestComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  useCanvas(ref as React.RefObject<HTMLDivElement>);

  return <div ref={ref} data-testid="container" />;
};

describe('useCanvas', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (engine.getInstance as jest.Mock).mockReturnValue({ canvas: mockCanvas });
  });

  it('appends canvas if not already contained', () => {
    render(<TestComponent />);
    const container = screen.getByTestId('container');

    expect(container.contains(mockCanvas)).toBe(true);
  });

  it('removes canvas on unmount', () => {
    const { unmount } = render(<TestComponent />);
    const container = screen.getByTestId('container');

    expect(container.contains(mockCanvas)).toBe(true);
    unmount();
    expect(container.contains(mockCanvas)).toBe(false);
  });

  it('does nothing if game instance is undefined', () => {
    (engine.getInstance as jest.Mock).mockReturnValue(undefined);
    render(<TestComponent />);
    const container = screen.getByTestId('container');

    expect(container.childNodes.length).toBe(0);
  });
});
