import React from 'react';
import Component from 'components/pages/SignUp';
import { Store } from 'antd/lib/form/interface';

const SignUp = () => {
  const handleSubmit = (values: Store) => {

  };

  return (<Component onSubmit={handleSubmit} />);
};

export default SignUp;
