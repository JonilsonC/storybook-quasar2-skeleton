import InputDefault from './InputDefault.vue';
import { Meta, StoryObj } from '@storybook/vue3';

export default {
  title: 'Componentes/Input/Default',
  component: InputDefault,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta;
// const Template = () => ({
//   // Components used in your story `template` are defined in the `components` object
//   components: { InputDefault },

//   // Here we define the `template`
//   template: '<q-input />',
// });
// export const Default = Template.bind({});
export const Default = {} as StoryObj;
