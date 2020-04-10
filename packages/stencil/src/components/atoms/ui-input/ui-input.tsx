import {
  Component, Prop, h, EventEmitter, Event, Element, ComponentInterface, Listen,
} from '@stencil/core';

@Component({
  tag: 'ui-input',
  styleUrl: 'ui-input.css',
  shadow: true,
})
export class DSInput implements ComponentInterface {
  @Prop() value: string;

  @Prop() placeholder?: string;

  @Event({
    eventName: 'input-changed',
  }) changed: EventEmitter;

  @Event({
    eventName: 'input-accept',
  }) accept: EventEmitter;

  @Element() el: HTMLElement;

  hasButton: boolean;

  componentWillLoad(): void {
    this.hasButton = /slot="button"/.test(this.el.innerHTML);
  }

  private handleChange = (e: Event): void => {
    this.value = (e.target as HTMLInputElement)?.value;
    this.changed.emit(e);
  }

  private handleAccept = (e: Event): void => {
    this.accept.emit(e);
  }

  @Listen('button-clicked')
  handleClick(e: Event): void {
    this.handleAccept(e);
  }

  @Listen('keyup')
  handleEnter(e: Event): void {
    if ((e as KeyboardEvent).keyCode === 13) {
      this.handleAccept(e);
    }
  }

  render(): Element {
    return (
      <div class="wrapper">
        <input value={this.value} onInput={this.handleChange} placeholder={this.placeholder} />
        {
          this.hasButton && (
            <ui-button>
              <slot name="button" />
            </ui-button>
          )
        }
      </div>
    );
  }
}
