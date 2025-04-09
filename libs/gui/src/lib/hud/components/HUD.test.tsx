import { render, screen, fireEvent } from '@testing-library/react';
import { HUD } from './HUD';
import { sceneController } from '@engine/scenes';

jest.mock('@engine/scenes', () => ({
  sceneController: {
    pauseGame: jest.fn(),
    goToMainMenu: jest.fn(),
  },
}));

describe('HUD', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders pause button', () => {
    render(<HUD />);
    expect(screen.getByText('Pause')).toBeInTheDocument();
  });

  it('calls pauseGame when pause button is clicked', () => {
    render(<HUD />);
    fireEvent.click(screen.getByText('Pause'));
    expect(sceneController.pauseGame).toHaveBeenCalled();
  });
});
