import { render } from '@testing-library/react';

export const renderWithMocks = (ui: React.ReactElement) => {
  return render(ui);
};
