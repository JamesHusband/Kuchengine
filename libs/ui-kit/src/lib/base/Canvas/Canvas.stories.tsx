import type { Meta, StoryObj } from '@storybook/react';
import { Canvas } from './Canvas';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Canvas> = {
  component: Canvas,
  title: 'Canvas',
};
export default meta;
type Story = StoryObj<typeof Canvas>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Canvas!/gi)).toBeTruthy();
  },
};
