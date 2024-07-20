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
        onAddTask(json.data); // 서버에 성공적으로 추가된 후 클라이언트 상태 업데이트
        setNewTaskName('');
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