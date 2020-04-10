import markdown from './readme.md';

export default {
  title: 'molecules/UI-List-Item',
  parameters: {
    notes: { markdown },
  },
};

export const Default = () => `
  <ui-list-item name="task1"></ui-list-item>
`;

export const long = () => `
  <ui-list-item name="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum rhoncus laoreet. Donec ut mauris sit amet dolor bibendum efficitur eu vel purus. Praesent commodo arcu sit amet lacus consequat luctus. Nullam molestie egestas leo ornare ornare. Donec elementum dui non viverra aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla interdum diam in arcu aliquet convallis. Etiam pulvinar sed lectus eget viverra. Nullam tempor pretium felis eget consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi congue ligula non eros lacinia, vitae condimentum enim cursus. Pellentesque et arcu purus. Aliquam at varius est. Aliquam lacinia, turpis eget porttitor sollicitudin, nisl arcu iaculis turpis, in rutrum tellus mauris vitae neque."></ui-list-item>
`;

export const last = () => `
  <ui-list-item last name="task1"></ui-list-item>
`;

