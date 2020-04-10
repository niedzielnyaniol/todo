import React from 'react';
import ReactDOM from 'react-dom';
import { applyPolyfills, defineCustomElements } from '@todo/design-system/loader';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        export interface IntrinsicElements {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [tagName: string]: any;
        }
    }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

applyPolyfills().then(() => {
  defineCustomElements();
});
