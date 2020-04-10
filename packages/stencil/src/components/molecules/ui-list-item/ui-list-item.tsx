import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'ui-list-item',
  styleUrl: 'ui-list-item.css',
  shadow: true,
})
export class UiListItem implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
