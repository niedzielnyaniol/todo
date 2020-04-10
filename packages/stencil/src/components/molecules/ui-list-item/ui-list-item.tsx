import {
  Component, ComponentInterface, h, Prop, Listen, Event, EventEmitter, State, Element,
} from '@stencil/core';
import classNames from '../../../utils/classNames';

@Component({
  tag: 'ui-list-item',
  styleUrl: 'ui-list-item.css',
  shadow: true,
})
export class UiListItem implements ComponentInterface {
  @Element() el: HTMLElement;

  @Prop() done: boolean;

  @Prop() name: string;

  @Prop() last?: boolean = false;

  @State() isEdit?: boolean = false;

  @Event({
    eventName: 'list-item-done',
  }) checked: EventEmitter;

  @Event({
    eventName: 'list-item-change-name',
  }) changeName: EventEmitter;

  @Event({
    eventName: 'list-item-delete',
  }) delete: EventEmitter

  @Listen('checkbox-change')
  handleCheckboxChange(e: Event): void {
    this.checked.emit(e);
  }

  @Listen('input-accept')
  handleAcceptChange(e: CustomEvent): void {
    this.changeName.emit(e);
    this.disableEditMode();
  }

  private enableEditMode = (): void => {
    this.isEdit = true;

    setTimeout(() => {
      const inputComponent = this.el.shadowRoot.querySelector('ui-input');
      const input = inputComponent.shadowRoot.querySelector('input');

      input.focus();
    }, 50);
  }

  private disableEditMode = (): void => {
    this.isEdit = false;
  }

  private handleDelete = (e: Event): void => {
    this.delete.emit(e);
  }

  render(): Element {
    const classes = classNames([
      'wrapper',
      this.last && 'last',
    ]);

    return (
      <div class={classes}>
        <ui-checkbox checked={this.done} disabled={this.isEdit} />
        <div class="name" onClick={this.enableEditMode}>
          {
            this.isEdit ? (
              <ui-input value={this.name} onBlur={this.disableEditMode} />
            ) : (
              <ui-button link wide toLeft class="name-wrapper" title={this.name}>
                {this.name}
              </ui-button>
            )
          }
        </div>
        {
          this.isEdit ? (
            <div class="button-wrapper">
              <ui-button link>
                <icon-mark />
              </ui-button>
              <ui-button link onClick={this.disableEditMode}>
                <icon-x />
              </ui-button>
            </div>
          ) : (
            <ui-button link>
              <icon-bin onClick={this.handleDelete} />
            </ui-button>
          )
        }
      </div>
    );
  }
}
