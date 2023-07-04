import type { Meta, StoryObj } from '@storybook/react'

import inputTextLabelError from './inputTextLabelError'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof inputTextLabelError> = {
  title: 'Form/inputTextLabelError',
  component: inputTextLabelError,
  tags: ['autodocs'],
  argTypes: {
    w: {
      control: 'number',
      step: 50,
    },
    h: {
      control: 'number',
      step: 50,
    },
    name: {
      control: 'string',
    },
  },
}

export default meta
type Story = StoryObj<typeof inputTextLabelError>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    disabled: false,
    hidden: false,
    name: 'hello',
    w: 100,
    h: 44,
    errors: undefined,
  },
}
