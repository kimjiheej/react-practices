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
        // 상태 업데이트 실패 시 클라이언트 상태를 복구하지 않음
      }
    } catch (err) {
      console.error('Error updating task:', err);
      // 상태 업데이트 실패 시 클라이언트 상태를 복구하지 않음
    }
  };

  const handleRemove = async (taskId) => {
    // 클라이언트 상태에서 태스크를 먼저 제거
    const updatedTasks = tasks.filter(task => task.no !== taskId);
    setTasks(updatedTasks);

    // 서버에 삭제 요청을 전송
    try {
      const response = await fetch(`/api/task/${taskId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const json = await response.json();
      if (json.result !== 'success') {
        console.error('API error:', json.message);
        // 서버 삭제 실패 시, 클라이언트 상태를 복구하지 않음
      }
    } catch (err) {
      console.error('Error deleting task:', err);
      // 서버 삭제 실패 시, 클라이언트 상태를 복구하지 않음
    }
  };

  const handleAddTask = async (newTask) => {
    await fetchTasks(); // 태스크를 추가한 후 최신 태스크 목록을 서버에서 가져온다
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