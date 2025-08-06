import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppLayout } from './AppLayout';

describe('AppLayout', () => {
  it('renders without crashing', () => {
    render(<AppLayout>Test Content</AppLayout>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const testContent = 'Hello World';
    render(<AppLayout>{testContent}</AppLayout>);
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('applies the correct container classes', () => {
    render(<AppLayout>Test</AppLayout>);

    const container = document.getElementById('app-layout');

    expect(container).toHaveClass('min-h-screen w-screen pt-8');
    expect(container?.querySelector('div')).toHaveClass('w-[900px] h-[700px] relative mx-auto');
  });
});
