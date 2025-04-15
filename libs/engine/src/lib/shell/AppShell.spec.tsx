import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AppShell } from './';
import { eventBus } from '@kuchen/engine';
import { useGameInit } from '../runtime/lib/useGameInit';
import '@testing-library/jest-dom';

// Mock the dependencies
jest.mock('@kuchen/engine', () => ({
  eventBus: {
    emit: jest.fn(),
  },
}));

jest.mock('../runtime/lib/useGameInit', () => ({
  useGameInit: jest.fn(),
}));

jest.mock('@kuchen/gui', () => ({
  GameCanvas: ({ gameRef }: { gameRef: any }) => <div data-testid="game-canvas" ref={gameRef} />,
  AppLayout: ({ children }: { children: React.ReactNode }) => <div data-testid="app-layout">{children}</div>,
  GuiLayout: ({ children }: { children: React.ReactNode }) => <div data-testid="gui-layout">{children}</div>,
  Button: ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
    <button onClick={onClick} data-testid="button">
      {children}
    </button>
  ),
}));

describe('AppShell', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { getByTestId } = render(<AppShell />);

    expect(getByTestId('app-layout')).toBeInTheDocument();
    expect(getByTestId('game-canvas')).toBeInTheDocument();
    expect(getByTestId('gui-layout')).toBeInTheDocument();
  });

  it('initializes the game with useGameInit hook', () => {
    render(<AppShell />);

    expect(useGameInit).toHaveBeenCalled();
    const gameRefArg = (useGameInit as jest.Mock).mock.calls[0][0];
    expect(gameRefArg.current).toBeTruthy(); // Should be a DOM element
    expect(gameRefArg.current).toHaveAttribute('data-testid', 'game-canvas');
  });

  it('emits scene-change event with "MainMenu" when clicking menu button', () => {
    const { getAllByTestId } = render(<AppShell />);
    const buttons = getAllByTestId('button');
    const menuButton = buttons.find((button) => button.textContent === 'Go to Menu');

    fireEvent.click(menuButton!);

    expect(eventBus.emit).toHaveBeenCalledWith('scene-change', 'MainMenu');
  });

  it('emits scene-change event with "Game" when clicking start game button', () => {
    const { getAllByTestId } = render(<AppShell />);
    const buttons = getAllByTestId('button');
    const startButton = buttons.find((button) => button.textContent === 'Start Game');

    fireEvent.click(startButton!);

    expect(eventBus.emit).toHaveBeenCalledWith('scene-change', 'Game');
  });
});
