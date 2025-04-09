import { render, screen, fireEvent } from '@testing-library/react';
import { MainMenu } from './MainMenu';
import { sceneController } from '@engine/scenes';

jest.mock('@engine/scenes', () => ({
  sceneController: {
    goToGame: jest.fn(),
  },
}));

describe('MainMenu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all menu options', () => {
    render(<MainMenu />);
    expect(screen.getByText('Start Game')).toBeInTheDocument();
  });

  it('calls goToGame when Start Game is clicked', () => {
    render(<MainMenu />);
    fireEvent.click(screen.getByText('Start Game'));
    expect(sceneController.goToGame).toHaveBeenCalled();
  });
});
