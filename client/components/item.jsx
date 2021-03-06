import React, { PropTypes } from 'react';
import classNames from 'classnames';

const TodoItem = ({ todo, handleComplete, handleDelete }) => (
  <li className={classNames({ completed: todo.completed })}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleComplete(todo)}
      />
      <label>
        {todo.title}
      </label>
      <button className="destroy" onClick={() => handleDelete(todo)} />
    </div>
    <input
      className="edit"
    />
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoItem;
