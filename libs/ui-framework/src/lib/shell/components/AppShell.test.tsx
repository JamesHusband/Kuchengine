import { render } from '@testing-library/react';
import { AppShell } from './AppShell';
import React, { ReactElement } from 'react';

jest.mock('@kuchen/ui-framework', () => ({
  GameProvider: ({ children }: { children: React.ReactNode }): ReactElement => (
    <div data-testid="game-provider">{children}</div>
  ),
  ScreenProvider: (): ReactElement => <div data-testid="screen-provider">Screen Provider</div>,
}));

jest.mock('../layout', () => ({
  Layout: ({ children }: { children: React.ReactNode }): ReactElement => <div data-testid="layout">{children}</div>,
}));

describe('AppShell', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<AppShell />);
    expect(baseElement).toBeTruthy();
  });

  it('renders with proper component hierarchy', () => {
    const { getByTestId } = render(<AppShell />);

    const gameProvider = getByTestId('game-provider');
    const layout = getByTestId('layout');
    const screenProvider = getByTestId('screen-provider');

    expect(gameProvider).toBeInTheDocument();
    expect(layout).toBeInTheDocument();
    expect(screenProvider).toBeInTheDocument();

    expect(gameProvider).toContainElement(layout);
    expect(layout).toContainElement(screenProvider);
  });
});
