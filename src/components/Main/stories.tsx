import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: {
      control: {
        type: 'text'
      }
    }
  }
}

export const Basic = (
  args: JSX.IntrinsicAttributes & {
    title?: string | undefined
    description?: string | undefined
  }
) => <Main {...args} />

// Basic.args = {

// }
