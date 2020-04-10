import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from './';

const onChange = action('onChange');

export const defaultView = (): JSX.Element => <Input onChange={onChange}/>;

export const withValue = (): JSX.Element => <Input value="default value" onChange={onChange}/>;

export default {
  title: 'atoms/Input',
  component: Input,
};
