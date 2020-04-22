import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import Props from './TodoList.types';

const TodoList = ({ data }: Props): JSX.Element => {
  const [tasks, setTask] = useState(data);

  const handleDelete = (id: number, e: Event) => {
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
