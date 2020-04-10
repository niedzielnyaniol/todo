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

export const disabled = () => `
  <ui-checkbox disabled="true"></ui-checkbox>
`;

export const disabledChecked = () => `
  <ui-checkbox disabled="true" checked="true"></ui-checkbox>
`;

