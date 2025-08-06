import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainMenu } from './MainMenu';
import { eventBus } from '@kuchen/engine';

jest.mock('@kuchen/engine', () => ({
  eventBus: {
    emit: jest.fn(),
  },
}));

jest.mock('../../layouts/GuiLayout', () => ({
  GuiLayout: ({ children }: { children: React.ReactNode }) => <div data-testid="gui-layout">{children}</div>,
}));

jest.mock('../../components', () => ({
  Button: ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
    <button data-testid="button" onClick={onClick}>
      {children}
    </button>
  ),
}));

describe('MainMenu', () => {
  let mockEmit: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockEmit = eventBus.emit as jest.Mock;
  });

  it('renders without crashing', () => {
    render(<MainMenu />);
    expect(screen.getByTestId('gui-layout')).toBeInTheDocument();
  });

  it('renders all menu buttons', () => {
    render(<MainMenu />);

    const buttons = screen.getAllByTestId('button');
    expect(buttons).toHaveLength(2);

    expect(screen.getByText('Go to Menu')).toBeInTheDocument();
    expect(screen.getByText('Start Game')).toBeInTheDocument();
  });

  it('emits scene-change event when "Go to Menu" button is clicked', () => {
    render(<MainMenu />);

    const goToMenuButton = screen.getByText('Go to Menu');
    fireEvent.click(goToMenuButton);

    expect(mockEmit).toHaveBeenCalledWith('scene-change', 'MainMenu');
  });

  it('emits scene-change event when "Start Game" button is clicked', () => {
    render(<MainMenu />);

    const startGameButton = screen.getByText('Start Game');
    fireEvent.click(startGameButton);

    expect(mockEmit).toHaveBeenCalledWith('scene-change', 'Game');
  });

  it('emits correct events for both buttons', () => {
    render(<MainMenu />);

    const goToMenuButton = screen.getByText('Go to Menu');
    const startGameButton = screen.getByText('Start Game');

    fireEvent.click(goToMenuButton);
    fireEvent.click(startGameButton);

    expect(mockEmit).toHaveBeenCalledTimes(2);
    expect(mockEmit).toHaveBeenNthCalledWith(1, 'scene-change', 'MainMenu');
    expect(mockEmit).toHaveBeenNthCalledWith(2, 'scene-change', 'Game');
  });
});
