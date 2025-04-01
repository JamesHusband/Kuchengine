import { render, screen } from '@testing-library/react';
import { Canvas } from './Canvas';

describe('Canvas', () => {
  it('should render successfully', () => {
    const containerRef = { current: null };
    render(<Canvas containerRef={containerRef} />);

    const canvas = screen.getByTestId('game-canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('should have correct accessibility attributes', () => {
    const containerRef = { current: null };
    render(<Canvas containerRef={containerRef} />);

    const canvas = screen.getByTestId('game-canvas');
    expect(canvas).toHaveAttribute('role', 'presentation');
    expect(canvas).toHaveAttribute('tabIndex', '0');
  });

  it('should apply correct styling classes', () => {
    const containerRef = { current: null };
    render(<Canvas containerRef={containerRef} />);

    const canvas = screen.getByTestId('game-canvas');
    expect(canvas).toHaveClass('w-full', 'h-full');
  });

  it('should properly attach the ref', () => {
    const containerRef = { current: null };
    render(<Canvas containerRef={containerRef} />);

    expect(containerRef.current).toBeInstanceOf(HTMLDivElement);
  });
});
