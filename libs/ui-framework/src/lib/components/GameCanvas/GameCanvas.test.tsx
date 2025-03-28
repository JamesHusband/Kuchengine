import { render, screen } from '@testing-library/react';
import { GameCanvas } from './';

jest.mock('../../hooks', () => ({
  usePhaserGame: jest.fn(),
}));

describe('GameCanvas', () => {
  beforeEach(() => {
    render(<GameCanvas />);
  });

  it('should render a div with correct attributes', () => {
    const canvas = screen.getByRole('presentation');
    expect(canvas).toHaveClass('w-full', 'h-full');
    expect(canvas).toHaveAttribute('tabindex', '0');
  });

  it('should call usePhaserGame with the container ref', () => {
    const { usePhaserGame } = require('../../hooks');
    render(<GameCanvas />);
    expect(usePhaserGame).toHaveBeenCalledWith(expect.any(Object));
  });
});
