import React from 'react';
import '../styles/TodoItem.css';

class TodoItem extends React.Component {

  onEdit = () => {
    const { text } = this.props;
    this.refs.editor.focus();
    this.refs.editor.setSelectionRange(0, text.length);
  }

  onEnter = (e) => {
    if (e.keyCode !== 13) return;
    e.target.blur();
  }

  render() {
    const {id, text, completed, onToggleTodo, onDeleteTodo, onUpdateTodo} = this.props;
    let classString = 'TodoItem';
    if (completed) classString += ' TodoItem--completed'
    return (
      <div className={classString}>
        <input
          className="TodoItem__done"
          type="checkbox"
          onChange={() => onToggleTodo(id)}
          checked={completed}
        />
        <div className="TodoItem__text">
          <input
            className="TodoItem__edit"
            type="text"
            value={text}
            ref="editor"
            onChange={e => onUpdateTodo(id, e.target.value)}
            onKeyUp={this.onEnter}
          />
          <p>{text}</p>
        </div>
        <div className="TodoItem__buttons">
          <button onClick={this.onEdit}>Edit</button>
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;