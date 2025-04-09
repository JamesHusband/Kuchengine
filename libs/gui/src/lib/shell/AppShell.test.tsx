import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppShell } from './AppShell';

jest.mock('@engine/scenes', () => ({
  ScreenProvider: () => <div data-testid="screen-provider">Screen Provider</div>,
}));

jest.mock('@kuchen/game', () => ({
  GameProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="game-provider">{children}</div>,
}));

jest.mock('@kuchen/ui-kit', () => ({
  Layout: ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
    <div data-testid="app-shell" {...props}>
      {children}
    </div>
  ),
}));

describe('AppShell', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<AppShell />);
    expect(baseElement).toBeTruthy();
  });

  it('renders with proper component hierarchy', () => {
    render(<AppShell />);
    const gameProvider = screen.getByTestId('game-provider');
    const appShell = screen.getByTestId('app-shell');
    const screenProvider = screen.getByTestId('screen-provider');

    expect(gameProvider).toBeInTheDocument();
    expect(appShell).toBeInTheDocument();
    expect(screenProvider).toBeInTheDocument();

    expect(gameProvider.contains(appShell)).toBe(true);
    expect(appShell.contains(screenProvider)).toBe(true);
  });

  it('renders with providers', () => {
    render(<AppShell />);
    expect(screen.getByTestId('game-provider')).toBeInTheDocument();
    expect(screen.getByTestId('app-shell')).toBeInTheDocument();
    expect(screen.getByTestId('screen-provider')).toBeInTheDocument();
  });
});
