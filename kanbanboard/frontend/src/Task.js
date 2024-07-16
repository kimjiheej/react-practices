import React from 'react';
import './assets/scss/Task.scss';

function Task({ task, onRemove }) {
  return (
    <li className="_Task">
      <input type="checkbox" checked={task.done} readOnly />
      {task.name}
      <a href="#" className="Task_Remove" onClick={() => onRemove(task.no)}></a>
    </li>
  );
}

export default Task;