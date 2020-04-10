import markdown from './readme.md';

export default {
  title: 'atoms/UI-Checkbox',
  parameters: {
    notes: { markdown },
  },
};

export const Default = () => `
  <ui-checkbox></ui-checkbox>
`;

export const checked = () => `
  <ui-checkbox checked="true"></ui-checkbox>
`;

