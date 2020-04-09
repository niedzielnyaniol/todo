// my-component.stories.js
import markdown from './readme.md';

export default {
  title: 'DS-Input',
  parameters: {
    notes: { markdown },
  },
};

export const Default = () => `
  <ds-input></ds-input>
`;
