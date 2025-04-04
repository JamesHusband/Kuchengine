import { render, screen, fireEvent } from '@testing-library/react';
import { PauseMenu } from './PauseMenu';
import { sceneController } from '@kuchen/scenes';

jest.mock('@kuchen/scenes', () => ({
  sceneController: {
    resumeGame: jest.fn(),
    restartGame: jest.fn(),
    goToMainMenu: jest.fn(),
  },
}));

describe('PauseMenu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all menu options', () => {
    render(<PauseMenu />);
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('Restart')).toBeInTheDocument();
    expect(screen.getByText('Options')).toBeInTheDocument();
    expect(screen.getByText('Quit')).toBeInTheDocument();
  });

  it('calls resumeGame when Play is clicked', () => {
    render(<PauseMenu />);
    fireEvent.click(screen.getByText('Play'));
    expect(sceneController.resumeGame).toHaveBeenCalled();
  });

  it('calls restartGame when Restart is clicked', () => {
    render(<PauseMenu />);
    fireEvent.click(screen.getByText('Restart'));
    expect(sceneController.restartGame).toHaveBeenCalled();
  });

  it('calls goToMainMenu when Quit is clicked', () => {
    render(<PauseMenu />);
    fireEvent.click(screen.getByText('Quit'));
    expect(sceneController.goToMainMenu).toHaveBeenCalled();
  });
});
