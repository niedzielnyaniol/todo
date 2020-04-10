import {
  Component, ComponentInterface, h, Prop, EventEmitter, Event,
} from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton implements ComponentInterface {
  @Prop() type?: 'button' | 'submit' | 'reset' = 'button';

  @Event({
    eventName: 'button-clicked',
  }) clicked: EventEmitter;

  private handleClick = (e: Event): void => {
    this.clicked.emit(e);
  }

  render(): Element {
    return (
      <button type={this.type} onClick={this.handleClick}>
        <slot />
      </button>
    );
  }
}
