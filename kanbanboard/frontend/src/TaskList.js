import React, { useState, useRef, useEffect } from 'react';
import { Input_Add_Task, Task_List } from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({ tasks, onTaskToggle, onRemove, onAddTask, cardNo }) {
  const [newTaskName, setNewTaskName] = useState('');
  const endOfTasksRef = useRef(null);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (newTaskName.trim() === '') return;

    try {
      const response = await fetch('/api/registerTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newTaskName,
          done: 'N',
          card_no: cardNo,
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const json = await response.json();
      if (json.result === 'success') {
        // 태스크 추가 후, 최신 태스크 목록을 서버에서 가져온다
        await onAddTask(); 
        setNewTaskName(''); // 입력 필드 초기화
      } else {
        console.error('API error:', json.message);
      }
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  useEffect(() => {
    if (endOfTasksRef.current) {
      endOfTasksRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [tasks]);

  return (
    <div className={Task_List}>
      <ul>
        {tasks.map(task => (
          <Task key={task.no} task={task} onToggle={onTaskToggle} onRemove={onRemove} />
        ))}
        <div ref={endOfTasksRef} />
      </ul>
      <form onSubmit={handleAddTask}>
        <input
          className={Input_Add_Task}
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="태스크 추가"
        />
      </form>
    </div>
  );
}

export default TaskList;