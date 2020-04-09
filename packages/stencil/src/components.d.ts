/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DsButton {
    }
    interface DsInput {
        "value": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLDsButtonElement extends Components.DsButton, HTMLStencilElement {
    }
    var HTMLDsButtonElement: {
        prototype: HTMLDsButtonElement;
        new (): HTMLDsButtonElement;
    };
    interface HTMLDsInputElement extends Components.DsInput, HTMLStencilElement {
    }
    var HTMLDsInputElement: {
        prototype: HTMLDsInputElement;
        new (): HTMLDsInputElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ds-button": HTMLDsButtonElement;
        "ds-input": HTMLDsInputElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface DsButton {
    }
    interface DsInput {
        "onChanged"?: (event: CustomEvent<any>) => void;
        "value"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "ds-button": DsButton;
        "ds-input": DsInput;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ds-button": LocalJSX.DsButton & JSXBase.HTMLAttributes<HTMLDsButtonElement>;
            "ds-input": LocalJSX.DsInput & JSXBase.HTMLAttributes<HTMLDsInputElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
