import type { Meta, StoryObj } from '@storybook/react'

import InputTextLabel from './inputTextLabel'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof InputTextLabel> = {
  title: 'Form/inputTextLabel',
  component: InputTextLabel,
  tags: ['autodocs'],
  argTypes: {
    w: {
      control: 'number',
    },
    h: {
      control: 'number',
    },
    name: {
      control: 'string',
    },
  },
}

export default meta
type Story = StoryObj<typeof InputTextLabel>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    disabled: false,
    hidden: false,
    name: 'hello',
  },
}
