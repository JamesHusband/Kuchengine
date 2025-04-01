import { render, screen, fireEvent } from '@testing-library/react';
import { HUD } from './HUD';
import { sceneController } from '../../core/controllers';

jest.mock('../../core/controllers', () => ({
  sceneController: {
    pauseGame: jest.fn(),
    goToMainMenu: jest.fn(),
  },
}));

describe('HUD Component', () => {
  it('renders the buttons and calls sceneController methods on click', () => {
    render(<HUD />);

    const pauseButton = screen.getByText('Pause');
    const returnButton = screen.getByText('Return to Menu');

    fireEvent.click(pauseButton);
    fireEvent.click(returnButton);

    expect(sceneController.pauseGame).toHaveBeenCalledTimes(1);
    expect(sceneController.goToMainMenu).toHaveBeenCalledTimes(1);
  });
});
