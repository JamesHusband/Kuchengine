import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GuiLayout } from './GuiLayout';

describe('GuiLayout', () => {
  it('renders without crashing', () => {
    render(<GuiLayout>Test Content</GuiLayout>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const testContent = 'Hello World';
    render(<GuiLayout>{testContent}</GuiLayout>);
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('applies the correct container classes', () => {
    render(<GuiLayout>Test</GuiLayout>);
    expect(document.getElementById('gui')).toHaveClass('absolute top-[10px] left-[10px] z-10');
  });
});
