import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow w-full py-2 px-4 bg-[#FFD700] hover:bg-[#FFC000] \n                  text-black font-bold text-center rounded\n                  border-2 border-[#B8860B] shadow-md\n                  transition-colors uppercase\n                  \n"
  },
};

export const MenuButton: Story = {
  args: {
    label: 'Menu Button',
    className: 'menu-button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    className: 'px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded shadow',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
  },
};
