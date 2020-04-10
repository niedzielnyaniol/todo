import {
  Component, ComponentInterface, h, Prop,
} from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton implements ComponentInterface {
  @Prop({ mutable: true }) type?: 'button' | 'submit' | 'reset' = 'button';

  render(): Element {
    return (
      <button type={this.type}>
        <slot />
      </button>
    );
  }
}
