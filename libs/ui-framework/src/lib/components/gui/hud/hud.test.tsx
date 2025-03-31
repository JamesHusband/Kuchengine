import { render, screen, fireEvent } from '@testing-library/react';
import { HUD } from './HUD';
import { sceneSystem } from '../../../systems/scene';

// Mock the sceneSystem methods
jest.mock('../../../systems/scene', () => ({
  sceneSystem: {
    pauseGame: jest.fn(),
    goToMainMenu: jest.fn(),
  },
}));

describe('HUD Component', () => {
  it('renders the buttons and calls sceneSystem methods on click', () => {
    render(<HUD />);

    const pauseButton = screen.getByText('Pause');
    const returnButton = screen.getByText('Return to Menu');

    fireEvent.click(pauseButton);
    fireEvent.click(returnButton);

    expect(sceneSystem.pauseGame).toHaveBeenCalledTimes(1);
    expect(sceneSystem.goToMainMenu).toHaveBeenCalledTimes(1);
  });
});
