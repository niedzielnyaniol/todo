import {
  Component, ComponentInterface, Host, h,
} from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true,
})
export class DsButton implements ComponentInterface {
  render(): Element {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
