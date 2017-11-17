import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import TodoFilter from '../containers/TodoFilter';
import '../styles/App.css';

const App = () => (
  <div className="App">
    <header className="App__header">
      <h1 className="App__title">Todo List</h1>
    </header>
    <AddTodo/>
    <TodoFilter/>
    <TodoList/>
  </div>
);

export default App;
