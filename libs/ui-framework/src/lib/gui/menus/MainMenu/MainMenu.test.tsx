import { render, screen, fireEvent } from '@testing-library/react';
import { MainMenu } from './MainMenu';
import { sceneController } from '../../../core/controllers';

jest.mock('../../../core/controllers', () => ({
  sceneController: {
    goToGame: jest.fn(),
  },
}));

describe('MainMenu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<MainMenu />);

    expect(screen.getByText('Kuchen')).toBeInTheDocument();

    expect(screen.getByText('Start Game')).toBeInTheDocument();
  });

  it('calls sceneController.goToGame when Start Game button is clicked', () => {
    render(<MainMenu />);

    const startButton = screen.getByText('Start Game');
    fireEvent.click(startButton);

    expect(sceneController.goToGame).toHaveBeenCalledTimes(1);
  });
});
