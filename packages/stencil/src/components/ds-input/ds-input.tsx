import {
  Component, Prop, h, EventEmitter, Event,
} from '@stencil/core';

@Component({
  tag: 'ds-input',
  styleUrl: 'ds-input.css',
  shadow: true,
})
export class DSInput {
  @Prop() value: string;

  @Event() changed: EventEmitter;

  private handleChange = (e: Event): void => {
    this.value = (e.target as HTMLInputElement)?.value;
    this.changed.emit(e);
  }

  render(): Element {
    return <input value={this.value} onInput={this.handleChange} />;
  }
}
