import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from './';

const onChange =  action('onChange');
const onEnter = action('onEnter');

export const Default = (): JSX.Element => <Input onChange={onChange} onEnter={onEnter}/>;

export const withValue = (): JSX.Element => <Input value="default value" onChange={onChange}onEnter={onEnter}/>;

export default {
  title: 'atoms/Input',
  component: Input,
};
