import {
  Component, ComponentInterface, h, Prop, EventEmitter, Event,
} from '@stencil/core';
import classNames from '../../../utils/classNames';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton implements ComponentInterface {
  @Prop() type?: 'button' | 'submit' | 'reset' = 'button';

  @Prop() link?: boolean = false;

  @Prop() wide?: boolean = false;

  @Prop() toLeft?: boolean = false;

  @Event({
    eventName: 'button-clicked',
  }) clicked: EventEmitter;

  private handleClick = (e: Event): void => {
    this.clicked.emit(e);
  }

  render(): Element {
    const classes = classNames([
      this.link && 'link',
      this.wide && 'wide',
      this.toLeft && 'to-left',
    ]);

    return (
      <button type={this.type} onClick={this.handleClick} class={classes}>
        <slot />
      </button>
    );
  }
}
