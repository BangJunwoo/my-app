import type { Meta, StoryObj } from '@storybook/react'

import InputText from './InputText'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof InputText> = {
  title: 'Form/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    w: {
      control: 'number',
    },
    h: {
      control: 'number',
    },
  },
}

export default meta
type Story = StoryObj<typeof InputText>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    disabled: true,
    hidden: true,
  },
}
