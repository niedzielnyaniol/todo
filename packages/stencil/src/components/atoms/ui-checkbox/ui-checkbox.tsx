import {
  Component, ComponentInterface, h, Prop, EventEmitter, Event,
} from '@stencil/core';

let checkboxIds = 0;

@Component({
  tag: 'ui-checkbox',
  styleUrl: 'ui-checkbox.css',
  shadow: true,
})
export class UiCheckbox implements ComponentInterface {
  private checkboxId = `ui-checkbox-${checkboxIds++}`

  @Prop() checked?: boolean = false;

  @Prop() disabled?: boolean = false;

  @Event({
    eventName: 'checkbox-change',
  }) change: EventEmitter;

  private handleChange = (e: Event): void => {
    this.change.emit(e);
  }

  render(): Element {
    return (
      <label htmlFor={this.checkboxId}>
        <input
          checked={this.checked}
          id={this.checkboxId}
          type="checkbox"
          onChange={this.handleChange}
          disabled={this.disabled}
        />
        <span />
        <slot />
      </label>
    );
  }
}
