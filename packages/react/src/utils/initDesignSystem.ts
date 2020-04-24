import { applyPolyfills, defineCustomElements } from '@todo/design-system/loader';
import '@todo/design-system/dist/stencil/stencil.css';
import 'antd/dist/antd.css';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        export interface IntrinsicElements {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [tagName: string]: any;
        }
    }
}

applyPolyfills().then(() => {
  defineCustomElements();
});
