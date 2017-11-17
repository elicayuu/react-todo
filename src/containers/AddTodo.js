import React from 'react';
import { connect } from 'react-redux';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { onAddTodo } from '../actions';
import '../styles/AddTodo.css';

const AddTodo = ({inputValue, onInputChange, onSubmit}) => (
  <div className="AddTodo">
    <form onSubmit={onSubmit}>
      <input
        className="AddTodo__input"
        type="text"
        placeholder="Add Todo..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  </div>
);

export default compose(
  connect(null, {onAddTodo}),
  withStateHandlers({inputValue: ''}, {
    onInputChange: state => e => ({
      inputValue: e.target.value
    }),
    clearInput: state => () => ({inputValue: ''})
  }),
  withHandlers({
    onSubmit: ({onAddTodo, inputValue, clearInput}) => e => {
      e.preventDefault();
      if (!inputValue.trim()) return;
      onAddTodo(inputValue);
      clearInput();
    }
  })
)(AddTodo);