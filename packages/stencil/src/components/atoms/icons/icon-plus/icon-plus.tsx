import {
  Component, ComponentInterface, h,
} from '@stencil/core';

@Component({
  tag: 'icon-plus',
  styleUrl: 'icon-plus.css',
  shadow: true,
})
export class IconPlus implements ComponentInterface {
  render(): Element {
    return (
      <i />
    );
  }
}
