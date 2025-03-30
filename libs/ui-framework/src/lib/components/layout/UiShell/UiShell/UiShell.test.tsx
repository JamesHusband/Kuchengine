import { screen } from '@testing-library/react';
import { UiShell } from './';
import { renderWithMocks } from '../../../../test-utils';

jest.mock('../../../../context', () => ({
  GameProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="game-provider">{children}</div>,
  ScreenProvider: () => <div data-testid="screen-provider" />,
}));

jest.mock('../../GameWrapper', () => ({
  GameWrapper: ({ children }: { children: React.ReactNode }) => <div data-testid="game-wrapper">{children}</div>,
}));

describe('UiShell', () => {
  beforeEach(() => {
    renderWithMocks(<UiShell />);
  });

  it('should render providers and wrapper in correct order', () => {
    const gameProvider = screen.getByTestId('game-provider');
    const gameWrapper = screen.getByTestId('game-wrapper');
    const screenProvider = screen.getByTestId('screen-provider');

    expect(gameProvider).toBeInTheDocument();
    expect(gameWrapper).toBeInTheDocument();
    expect(screenProvider).toBeInTheDocument();
    expect(gameProvider).toContainElement(gameWrapper);
    expect(gameWrapper).toContainElement(screenProvider);
  });
});
