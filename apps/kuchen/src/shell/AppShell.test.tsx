import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppShell } from './AppShell';
import React from 'react';

jest.mock('@kuchen/ui-framework', () => ({
  GameProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="game-provider">{children}</div>,
  ScreenProvider: () => <div data-testid="screen-provider">Screen Provider</div>,
}));

jest.mock('@kuchen/ui-kit', () => ({
  Layout: ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
    <div {...props}>{children}</div>
  ),
}));

describe('AppShell', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<AppShell />);
    expect(baseElement).toBeTruthy();
  });

  it('renders with proper component hierarchy', () => {
    const { getByTestId } = render(<AppShell />);

    const gameProvider = getByTestId('game-provider');
    const appShell = getByTestId('app-shell');
    const screenProvider = getByTestId('screen-provider');

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
