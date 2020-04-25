import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Input from 'components/atoms/Input';

const ADD_TASK = gql`
    mutation addTask($name: String!) {
        addTask(name: $name)
    }
`;

const NewTaskInput = () => {
  const [addTask] = useMutation(ADD_TASK);
  const [value, setValue] = useState('');

  const handleEnter = (e: CustomEvent) => {
    addTask({ variables: { name: e.detail } }).then(() => {
      // eslint-disable-next-line no-alert
      alert(`Task ${value} added!`);
      setValue('');
    });
  };

  return (<Input value={value} onChange={(e) => { setValue(e.detail); }} onEnter={handleEnter} />);
};

export default NewTaskInput;
