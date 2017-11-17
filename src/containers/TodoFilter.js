import React from 'react';
import { connect } from 'react-redux';
import { onSetFilter, onClearCompletedTodo } from '../actions';
import '../styles/TodoFilter.css';

const TodoFilter = ({filter, onSetFilter, onClearCompletedTodo}) => (
  <div className="TodoFilter">
    <div className="TodoFilter__section">
      <FilterButton name="SHOW_ALL" {...{filter, onSetFilter}}>
        全部
      </FilterButton>
      <FilterButton name="SHOW_ACTIVE" {...{filter, onSetFilter}}>
        未完成
      </FilterButton>
      <FilterButton name="SHOW_COMPLETED" {...{filter, onSetFilter}}>
        已完成
      </FilterButton>
    </div>
    <div className="TodoFilter__section">
      <button className="TodoFilter__clear" onClick={onClearCompletedTodo}>清除已完成</button>
    </div>
  </div>
);

const FilterButton = ({children, filter, name, onSetFilter}) => {
  let classString = 'TodoFilter__filter';
  if (filter === name) classString += ' TodoFilter__filter--active';
  return (
    <button
      className={classString}
      onClick={() => onSetFilter(name)}
    >
      {children}
    </button>
  );
}

export default connect(
  state => ({filter: state.filter}),
  {onSetFilter, onClearCompletedTodo}
)(TodoFilter);