import React from 'react';
import './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({ title, description, tasks, isOpen }) {
  return (
    <div className={`_Card ${isOpen ? 'Card_Title_Open' : ''}`}>
      <div className="Card_Title">{title}</div>
      <div className="Card_Details">
        {description}
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default Card;