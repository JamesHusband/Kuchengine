import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PauseMenu } from './PauseMenu';
import { eventBus } from '@kuchen/engine';

jest.mock('@kuchen/engine', () => ({
  eventBus: {
    emit: jest.fn(),
  },
}));

jest.mock('../../components', () => ({
  Button: ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
    <button data-testid="button" onClick={onClick}>
      {children}
    </button>
  ),
}));

const mockAlert = jest.fn();
global.alert = mockAlert;

describe('PauseMenu', () => {
  let mockEmit: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockEmit = eventBus.emit as jest.Mock;
  });

  it('renders without crashing', () => {
    const mockOnResume = jest.fn();
    render(<PauseMenu onResume={mockOnResume} />);
    expect(screen.getAllByTestId('button')).toHaveLength(3);
  });

  it('renders all menu buttons', () => {
    const mockOnResume = jest.fn();
    render(<PauseMenu onResume={mockOnResume} />);

    const buttons = screen.getAllByTestId('button');
    expect(buttons).toHaveLength(3);

    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('Options')).toBeInTheDocument();
    expect(screen.getByText('Main Menu')).toBeInTheDocument();
  });

  it('calls onResume when Resume button is clicked', () => {
    const mockOnResume = jest.fn();
    render(<PauseMenu onResume={mockOnResume} />);

    const resumeButton = screen.getByText('Resume');
    fireEvent.click(resumeButton);

    expect(mockOnResume).toHaveBeenCalledTimes(1);
  });

  it('shows alert when Options button is clicked', () => {
    const mockOnResume = jest.fn();
    render(<PauseMenu onResume={mockOnResume} />);

    const optionsButton = screen.getByText('Options');
    fireEvent.click(optionsButton);

    expect(mockAlert).toHaveBeenCalledWith('Options coming soon!');
  });

  it('emits scene-change event when Main Menu button is clicked', () => {
    const mockOnResume = jest.fn();
    render(<PauseMenu onResume={mockOnResume} />);

    const mainMenuButton = screen.getByText('Main Menu');
    fireEvent.click(mainMenuButton);

    expect(mockEmit).toHaveBeenCalledWith('scene-change', 'MainMenu');
  });

  it('handles all button interactions correctly', () => {
    const mockOnResume = jest.fn();
    render(<PauseMenu onResume={mockOnResume} />);

    // Click all buttons
    fireEvent.click(screen.getByText('Resume'));
    fireEvent.click(screen.getByText('Options'));
    fireEvent.click(screen.getByText('Main Menu'));

    expect(mockOnResume).toHaveBeenCalledTimes(1);
    expect(mockAlert).toHaveBeenCalledWith('Options coming soon!');
    expect(mockEmit).toHaveBeenCalledWith('scene-change', 'MainMenu');
  });
});
