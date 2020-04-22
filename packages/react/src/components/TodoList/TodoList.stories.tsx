import React from 'react';
import TodoList from './';
import Task from '../../utils/types/Task';

const data = [
  new Task(1, 'task1', false),
  new Task(2, 'task12', true),
  new Task(3, 'task3', false),
  new Task(4, 'task4', true),
  new Task(5, 'task5', false),
];

export const Default = (): JSX.Element => <TodoList data={data}/>

export const emptyList = (): JSX.Element => <TodoList data={[]}/>

export default {
  title: 'TodoList',
  component: TodoList,
};