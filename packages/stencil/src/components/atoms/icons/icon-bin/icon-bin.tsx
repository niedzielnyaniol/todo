import {
  Component, ComponentInterface, h,
} from '@stencil/core';

@Component({
  tag: 'icon-bin',
  styleUrl: 'icon-bin.css',
  shadow: true,
})
export class IconBin implements ComponentInterface {
  render(): Element {
    return (
      <i>
        <span class="head" />
        <span class="down">
          <span class="stripe" />
          <span class="stripe" />
          <span class="stripe" />
        </span>
      </i>
    );
  }
}
