import React, { useState, useEffect } from 'react';
import { _Card, Card_Title, Card_Title_Open } from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({ no, title, description, tasks: initialTasks, isToDo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState(initialTasks || []); // 초기값을 빈 배열로 설정

  const toggleCard = async () => {
    if (!isOpen) {
      // 카드가 열리기 전, 아직 task가 없으면 fetchTasks 호출
      if (tasks.length === 0) {
        await fetchTasks();
      }
    }
    setIsOpen(!isOpen);
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch(`/api/task/${no}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const json = await response.json();
      if (json.result === 'success') {
        setTasks(json.data || []); // 데이터가 없을 경우 빈 배열로 초기화
      } else {
        console.error('API error:', json.message);
      }
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
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