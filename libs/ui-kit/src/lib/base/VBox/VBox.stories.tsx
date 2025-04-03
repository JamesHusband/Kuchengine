import type { Meta, StoryObj } from '@storybook/react';
import { VBox } from './VBox';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof VBox> = {
  component: VBox,
  title: 'VBox',
};
export default meta;
type Story = StoryObj<typeof VBox>;

export const Primary = {
  args: {
    children: '',
    className: '',
  },
};

export const Heading: Story = {
  args: {
    children: '',
    className: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to VBox!/gi)).toBeTruthy();
  },
};
