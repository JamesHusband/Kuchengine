import { render } from '@testing-library/react';
import { GameProvider } from './';

jest.mock('../state', () => ({
  useGameState: () => ({
    currentScene: 'MainMenuScene',
  }),
}));

describe('GameProvider', () => {
  it('should render', () => {
    expect(() => render(<GameProvider>Test</GameProvider>)).not.toThrow();
  });
});
