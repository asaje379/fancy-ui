import '../../lib.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  args: {
    children: 'Click me',
    theme: 'primary',
    bgColor: '',
    textColor: '',
    outlined: false,
    expand: false,
    disabled: false,
  },
};
