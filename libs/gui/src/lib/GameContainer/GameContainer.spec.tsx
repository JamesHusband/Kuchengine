import { render } from '@testing-library/react';
import { GameContainer } from './GameContainer';
import { useGame } from '@kuchen/game';
import { useCanvas } from '../hooks/useCanvas';

jest.mock('@kuchen/game', () => ({
  useGame: jest.fn(),
}));

jest.mock('../hooks/useCanvas', () => ({
  useCanvas: jest.fn(),
}));

describe('GameContainer', () => {
  it('should render successfully', () => {
    render(<GameContainer />);
    expect(useGame).toHaveBeenCalled();
    expect(useCanvas).toHaveBeenCalled();
  });
});
