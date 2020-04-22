import React from 'react';
import TodoList from './TodoList';
import '@todo/design-system/dist/stencil/stencil.css';
import NewTaskInput from '../containers/NewTaskInput/intex';

function App(): JSX.Element {
  return (
    <div className="App">
      <NewTaskInput />
      <TodoList data={[]} />
    </div>
  );
}

export default App;
