let nextTodoId = 0;

export const onAddTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  };
};

export const onDeleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

export const onUpdateTodo = (id, text) => {
  return {
    type: 'UPDATE_TODO',
    id,
    text
  };
};

export const onToggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const onSetFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  };
};

export const onClearCompletedTodo = () => ({type: 'CLEAR_COMPLETED_TODO'});