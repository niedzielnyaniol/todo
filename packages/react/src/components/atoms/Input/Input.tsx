import React, { useEffect } from 'react';

import Props from './Input.types';

const Input = ({ value = '', onChange }: Props): JSX.Element => {
  useEffect(() => {
    const input = document.querySelector('ds-input');

    if (input) {
      input.addEventListener('changed', onChange);
    }

    return (): void => {
      if (input) {
        input.removeEventListener('changed', onChange);
      }
    };
  });

  return <ds-input value={value} />;
};

export default Input;
