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

export const link = () => `
  <ui-button link>Link</ui-button>
`;

export const wide = () => `
  <ui-button wide>wide</ui-button>
`;

export const wideToLeft = () => `
  <ui-button wide toLeft>wide</ui-button>
`;

export const wideLinkToLeft = () => `
  <ui-button link toLeft>wide</ui-button>
`;
