import markdown from './readme.md';

export default {
  title: 'atoms/UI-Button',
  parameters: {
    notes: { markdown },
  },
};

export const Default = () => `
  <ui-button>heloo</ui-button>
`;

export const WithIcon = () => `
  <ui-button><icon-plus></icon-plus></ui-button>
`;
