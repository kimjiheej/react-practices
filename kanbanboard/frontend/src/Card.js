import React, { useState } from 'react';
import { _Card, Card_Title, Card_Title_Open } from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({ no, title, description, tasks: initialTasks, isToDo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState(initialTasks || []);

  const toggleCard = async () => {
    if (!isOpen && tasks.length === 0) {
      await fetchTasks();
    }
    setIsOpen(prev => !prev);
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch(`/api/task/${no}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const json = await response.json();
      if (json.result === 'success') {
        setTasks(json.data || []);
      } else {
        console.error('API error:', json.message);
      }
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const handleTaskToggle = async (taskId, isChecked) => {
    const updatedTasks = tasks.map(task =>
      task.no === taskId ? { ...task, done: isChecked ? 'Y' : 'N' } : task
    );
    setTasks(updatedTasks);

    try {
      const response = await fetch(`/api/task/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          no: taskId,
          done: isChecked ? 'Y' : 'N',
        }),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const json = await response.json();
      if (json.result !== 'success') {
        console.error('API error:', json.message);
      }
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  const handleRemove = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.no !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks(prevTasks => [
      ...prevTasks,
      newTask
    ]);
  };

  return (
    <div className={`${_Card} ${isOpen ? Card_Title_Open : ''}`}>
      <div className={Card_Title} onClick={toggleCard}>{title}</div>
      <div>{description}</div>
      {isOpen && (
        <TaskList
          tasks={tasks}
          onTaskToggle={handleTaskToggle}
          onRemove={handleRemove}
          onAddTask={handleAddTask}
          cardNo={no}
        />
      )}
    </div>
  );
}

export default Card;