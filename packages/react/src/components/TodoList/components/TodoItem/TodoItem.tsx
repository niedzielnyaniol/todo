import React, { useEffect } from 'react';
import Props from './TodoItem.types';

const TodoItem = ({
  id,
  name,
  isDone,
  last,
  onDelete,
  onNameChange,
  onStatusChange,
}: Props): JSX.Element => {
  useEffect(() => {
    const item = document.querySelector('ui-list-item');

    if (item) {
      item.addEventListener('list-item-change-name', (e: Event) => onNameChange(id, e));
      item.addEventListener('list-item-delete', (e: Event) => onDelete(id, e));
      item.addEventListener('list-item-done', (e: Event) => onStatusChange(id, e));
    }

    return (): void => {
      if (item) {
        item.removeEventListener('list-item-change-name', (e: Event) => onNameChange(id, e));
        item.removeEventListener('list-item-delete', (e: Event) => onDelete(id, e));
        item.removeEventListener('list-item-done', (e: Event) => onStatusChange(id, e));
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ui-list-item done={isDone} name={name} last={last} />
  );
};

export default TodoItem;
