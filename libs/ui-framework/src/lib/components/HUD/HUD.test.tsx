import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HUD } from './';
import { renderWithMocks } from '../../test-utils';
import { gameEvents } from '@kuchen/engine';

jest.mock('@kuchen/engine', () => ({
  gameEvents: {
    emit: jest.fn(),
  },
}));

describe('HUD', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    renderWithMocks(<HUD />);
  });

  it('should render return to menu button', () => {
    expect(screen.getByText('Return to Menu')).toBeInTheDocument();
  });

  it('should emit scene change event when clicking return button', async () => {
    const button = screen.getByText('Return to Menu');
    await userEvent.click(button);
    expect(gameEvents.emit).toHaveBeenCalledWith('scene-change', 'MainMenuScene');
  });
});
