import { render, screen } from '@testing-library/react';
import { AppShell } from './AppShell';

jest.mock('@kuchen/gui', () => ({
  GameCanvas: () => <div data-testid="game-canvas" />,
  AppLayout: ({ children }: { children: React.ReactNode }) => <div data-testid="app-layout">{children}</div>,
  GuiProvider: () => <div data-testid="gui-provider" />,
}));

describe('AppShell', () => {
  it('should render without crashing', () => {
    expect(() => {
      render(<AppShell />);
    }).not.toThrow();
  });

  it('should render all required components', () => {
    render(<AppShell />);

    expect(screen.getByTestId('app-layout')).toBeInTheDocument();
    expect(screen.getByTestId('game-canvas')).toBeInTheDocument();
    expect(screen.getByTestId('gui-provider')).toBeInTheDocument();
  });

  it('should pass gameRef to GameCanvas', () => {
    render(<AppShell />);

    expect(screen.getByTestId('game-canvas')).toBeInTheDocument();
  });
});
