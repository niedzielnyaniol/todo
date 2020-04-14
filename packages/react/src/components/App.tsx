import React from 'react';
import TodoList from './TodoList';
import '@todo/design-system/dist/stencil/stencil.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
