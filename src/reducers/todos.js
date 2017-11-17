const initSate = {};

export default function todosReducer(state = initSate, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          text: action.text,
          completed: false
        }
      };

    case 'DELETE_TODO':
      const newState = {...state};
      if (newState[action.id]) delete newState[action.id];
      return newState;

    case 'UPDATE_TODO':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          text: action.text
        }
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          completed: !state[action.id].completed
        }
      };

    case 'CLEAR_COMPLETED_TODO':
      return Object.values(state).reduce((todos, todo) => {
        if (!todo.completed) todos = {...todos, [todo.id]: todo};
        return todos;
      }, {});

    default:
      return state
  }
}