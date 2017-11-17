const initSate = 'SHOW_ALL';

export default function filterReducer(state = initSate, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;

    default:
      return state
  }
}