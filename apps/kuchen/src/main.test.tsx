import { jest } from '@jest/globals';
import { act } from 'react';
import { waitFor } from '@testing-library/dom';

jest.mock('./shell', () => ({
  AppShell: () => <div data-testid="app-shell" />,
}));

describe('main.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    jest.resetModules();
  });

  it('renders AppShell', async () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    await act(async () => {
      await import('./main');
    });

    await waitFor(() => {
      expect(document.querySelector('[data-testid="app-shell"]')).toBeInTheDocument();
    });
  });

  it('throws if root is not found', async () => {
    let error: Error | undefined;

    await act(async () => {
      try {
        await import('./main');
      } catch (e) {
        error = e as Error;
      }
    });

    expect(error?.message).toBe('Root element not found');
  });
});
