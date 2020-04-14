import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import Task from '../../utils/types/Task';

const data = [
  new Task(1, 'task1', false),
  new Task(2, 'task12', true),
  new Task(3, 'task3', false),
  new Task(4, 'task4', true),
  new Task(5, 'task5', false),
];

const TodoList = (): JSX.Element => {
  const [tasks, setTask] = useState(data);

  const handleDelete = (id: number, e: Event) => {
    console.log(id, 'dwdw');
    const index = tasks.findIndex((el) => el.id === id);
    if (index > -1) {
      tasks.splice(index, 1);
    }

    setTask(tasks);
  };

  const handleNameChange = (id: number, e: Event) => {};

  const handleStatusChange = (id: number, e: Event) => {};

  return (
    <div className="wrapper">
      {
        tasks.map((task): JSX.Element => (
          <TodoItem
            key={task.id}
            id={task.id}
            name={task.name}
            isDone={task.isDone}
            onDelete={handleDelete}
            onNameChange={handleNameChange}
            onStatusChange={handleStatusChange}
            last={false}
          />
        ))
      }
    </div>
  );
};

export default TodoList;
