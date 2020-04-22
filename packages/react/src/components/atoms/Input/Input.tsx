import React, { useEffect } from 'react';

import Props from './Input.types';

const Input = ({
  onChange,
  value = '',
  onEnter = () => {},
}: Props): JSX.Element => {
  useEffect(() => {
    const input = document.querySelector('ui-input');

    if (input) {
      input.addEventListener('input-changed', onChange as EventListener);
      input.addEventListener('input-accept', onEnter as EventListener);
    }

    return (): void => {
      if (input) {
        input.removeEventListener('input-changed', onChange as EventListener);
        input.removeEventListener('input-accept', onEnter as EventListener);
      }
    };
  });

  return <ui-input value={value} />;
};

export default Input;
