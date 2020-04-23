import { applyPolyfills, defineCustomElements } from '@todo/design-system/loader';
import '@todo/design-system/dist/stencil/stencil.css';
import 'antd/dist/antd.css'

applyPolyfills().then(() => {
  defineCustomElements();
});
