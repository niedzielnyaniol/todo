import {
  Component, Prop, h, EventEmitter, Event,
} from '@stencil/core';

@Component({
  tag: 'ui-input',
  styleUrl: 'ui-input.css',
  shadow: true,
})
export class DSInput {
  @Prop() value: string;

  @Prop() placeholder?: string;

  @Event() changed: EventEmitter;

  private handleChange = (e: Event): void => {
    this.value = (e.target as HTMLInputElement)?.value;
    this.changed.emit(e);
  }

  render(): Element {
    return <input value={this.value} onInput={this.handleChange} placeholder={this.placeholder} />;
  }
}
