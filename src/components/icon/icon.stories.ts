import { Icon } from './Icon';
import '../../lib.scss';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconStory: Story = {
  args: {
    name: 'search',
  },
};
