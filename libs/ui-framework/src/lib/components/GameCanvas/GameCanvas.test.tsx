import { screen } from '@testing-library/react';
import { GameCanvas } from './';
import { renderWithMocks } from '../../test-utils';

const mockUsePhaserGame = jest.fn();
jest.mock('../../hooks', () => ({
  usePhaserGame: (ref: any) => mockUsePhaserGame(ref),
}));

describe('GameCanvas', () => {
  beforeEach(() => {
    mockUsePhaserGame.mockClear();
    renderWithMocks(<GameCanvas />);
  });

  it('should render a div with correct attributes', () => {
    const canvas = screen.getByRole('presentation');
    expect(canvas).toHaveClass('w-full', 'h-full');
    expect(canvas).toHaveAttribute('tabindex', '0');
  });

  it('should call usePhaserGame with the container ref', () => {
    renderWithMocks(<GameCanvas />);
    expect(mockUsePhaserGame).toHaveBeenCalledWith(expect.any(Object));
  });
});
