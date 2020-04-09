// my-component.stories.js
import markdown from './readme.md';

export default {
  title: 'My Component',
  parameters: {
    notes: { markdown },
  },
};

export const Default = () => `
  <my-component first="Millie" middle="Bobby" last="Kaczmarczyk"></my-component>
`;
