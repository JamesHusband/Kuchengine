import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('@kuchen/ui-framework', () => ({
  AppShell: () => <div data-testid="app-shell">App Shell</div>,
}));

describe('Main', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('should render AppShell when root element exists', async () => {
    await import('./main');

    await waitFor(() => {
      expect(screen.getByTestId('app-shell')).toBeInTheDocument();
      expect(screen.getByText('App Shell')).toBeInTheDocument();
    });
  });

  it('should throw error when root element is not found', () => {
    document.body.innerHTML = '';

    expect(() => {
      jest.isolateModules(() => {
        require('./main');
      });
    }).toThrow('Root element not found');
  });
});
