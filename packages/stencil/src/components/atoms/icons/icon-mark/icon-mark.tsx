import {
  Component, ComponentInterface, h,
} from '@stencil/core';

@Component({
  tag: 'icon-mark',
  styleUrl: 'icon-mark.css',
  shadow: true,
})
export class IconMark implements ComponentInterface {
  render(): Element {
    return (
      <i />
    );
  }
}
