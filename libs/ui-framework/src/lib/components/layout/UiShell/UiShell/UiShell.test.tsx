import { screen } from '@testing-library/react';
import { UiShell } from './';
import { renderWithMocks } from '../../../../test-utils';

jest.mock('../../../../context', () => ({
  GameProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="game-provider">{children}</div>,
  ScreenProvider: () => <div data-testid="screen-provider" />,
}));

describe('UiShell', () => {
  beforeEach(() => {
    renderWithMocks(<UiShell />);
  });

  it('should render providers in correct order', () => {
    const gameProvider = screen.getByTestId('game-provider');
    const screenProvider = screen.getByTestId('screen-provider');

    expect(gameProvider).toBeInTheDocument();
    expect(screenProvider).toBeInTheDocument();
    expect(gameProvider).toContainElement(screenProvider);
  });
});
