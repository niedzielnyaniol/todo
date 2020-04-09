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

  @Event() changeValue: EventEmitter;

  handleChange = (e: Event): void => {
    this.changeValue.emit((e.target as HTMLInputElement).value);
  }

  render(): Element {
    return <input value={this.value} onChange={this.handleChange} />;
  }
}
