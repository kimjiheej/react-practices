import React, { useState } from 'react';
import { _Card, Card_Title, Card_Title_Open } from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({ title, description, tasks: initialTasks, isToDo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  const handleTaskToggle = (taskId, isChecked) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.no === taskId ? { ...task, done: isChecked } : task
      )
    );
  };

  const handleRemove = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.no !== taskId));
  };

  return (
    <div className={`${_Card} ${isOpen ? Card_Title_Open : ''}`}>
      <div className={Card_Title} onClick={toggleCard}>{title}</div>
      <div>{description}</div>
      {isOpen && (
        <TaskList tasks={tasks} isToDo={isToDo} onTaskToggle={handleTaskToggle} onRemove={handleRemove} />
      )}
    </div>
  );
}

export default Card;