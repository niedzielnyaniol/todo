import markdown from './readme.md';

export default {
  title: 'atoms/UI-Input',
  parameters: {
    notes: { markdown },
  },
};

export const Default = () => `
  <ui-input></ui-input>
`;

export const withValue = () => `
  <ui-input value="default value"></ui-input>
`;

export const withPlaceholder = () => `
  <ui-input placeholder="default placeholder"></ui-input>
`;
