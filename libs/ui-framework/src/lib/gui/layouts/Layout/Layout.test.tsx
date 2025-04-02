import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout', () => {
  it('renders without crashing', () => {
    render(<Layout>Test content</Layout>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <Layout>
        <div data-testid="child-element">Child content</div>
      </Layout>,
    );
    expect(screen.getByTestId('child-element')).toBeInTheDocument();
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('applies correct styling and dimensions', () => {
    const { container } = render(<Layout>Content</Layout>);

    const outerContainer = container.firstChild as HTMLElement;
    expect(outerContainer).toHaveClass('min-h-screen', 'w-full', 'bg-white', 'flex', 'items-center', 'justify-center');

    const innerContainer = outerContainer.firstChild as HTMLElement;
    expect(innerContainer).toHaveClass('w-[1024px]', 'h-[768px]', 'relative');
  });
});
