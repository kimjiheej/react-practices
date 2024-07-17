import React, { useState } from 'react';
import { _Card, Card_Title, Card_Title_Open } from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({ title, description, tasks }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen); // isOpen 상태를 반전시킴
  };

  return (
    <div className={`${_Card} ${isOpen ? Card_Title_Open : ''}`}>
      <div className={Card_Title} onClick={toggleCard}>{title}</div>
      {isOpen && (
        <div className="Card_Details">
          {description}
          <TaskList tasks={tasks} />
        </div>
      )}
    </div>
  );
}

export default Card;