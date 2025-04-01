import { render, screen, fireEvent } from '@testing-library/react';
import { PauseMenu } from './PauseMenu';
import { sceneController } from '../../../core/controllers';

jest.mock('../../../core/controllers', () => ({
  sceneController: {
    resumeGame: jest.fn(),
    restartGame: jest.fn(),
    openOptions: jest.fn(),
    goToMainMenu: jest.fn(),
  },
}));

describe('PauseMenu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the pause menu with correct title', () => {
    render(<PauseMenu />);
    expect(screen.getByText('Paused')).toBeInTheDocument();
  });

  it('renders all required buttons', () => {
    render(<PauseMenu />);
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('Restart')).toBeInTheDocument();
    expect(screen.getByText('Options')).toBeInTheDocument();
    expect(screen.getByText('Quit')).toBeInTheDocument();
  });

  it('calls resumeGame when Play button is clicked', () => {
    render(<PauseMenu />);
    fireEvent.click(screen.getByText('Play'));
    expect(sceneController.resumeGame).toHaveBeenCalledTimes(1);
  });

  it('calls restartGame when Restart button is clicked', () => {
    render(<PauseMenu />);
    fireEvent.click(screen.getByText('Restart'));
    expect(sceneController.restartGame).toHaveBeenCalledTimes(1);
  });

  it('calls openOptions when Options button is clicked', () => {
    render(<PauseMenu />);
    fireEvent.click(screen.getByText('Options'));
    expect(sceneController.openOptions).toHaveBeenCalledTimes(1);
  });

  it('calls goToMainMenu when Quit button is clicked', () => {
    render(<PauseMenu />);
    fireEvent.click(screen.getByText('Quit'));
    expect(sceneController.goToMainMenu).toHaveBeenCalledTimes(1);
  });
});
