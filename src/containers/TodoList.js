import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../components/TodoItem';
import { onToggleTodo, onDeleteTodo, onUpdateTodo } from '../actions';
import '../styles/TodoList.css';

const TodoList = ({todos, filter, onToggleTodo, onDeleteTodo, onUpdateTodo}) => {
  const todoArr = Object.values(todos);
  const visibleTodos = 
    filter === 'SHOW_ACTIVE' ? todoArr.filter(todo => !todo.completed) :
    filter === 'SHOW_COMPLETED' ? todoArr.filter(todo => todo.completed) :
    todoArr;
  const descending = (a, b) => (a.id < b.id);

  return (
    <div className="TodoList">
      {visibleTodos.sort(descending).map(todo => 
        <TodoItem
          {...{...todo, onToggleTodo, onDeleteTodo, onUpdateTodo}}
          key={todo.id}
        />
      )}
      {visibleTodos.length === 0 &&
        <p className="TodoList__empty">--- No todos ---</p>
      }
    </div>
  );
};

export default connect(
  state => state,
  {onToggleTodo, onDeleteTodo, onUpdateTodo}
)(TodoList);