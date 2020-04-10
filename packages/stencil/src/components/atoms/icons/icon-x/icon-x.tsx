import {
  Component, ComponentInterface, h,
} from '@stencil/core';

@Component({
  tag: 'icon-x',
  styleUrl: 'icon-x.css',
  shadow: true,
})
export class IconX implements ComponentInterface {
  render(): Element {
    return (
      <i />
    );
  }
}
