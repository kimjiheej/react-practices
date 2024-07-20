import React, { useState } from 'react';
import { Input_Add_Task, Task_List } from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({ tasks, onTaskToggle, onRemove, onAddTask, cardNo }) {
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로 고침 방지
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
        onAddTask(json.data); // 새 작업을 추가
        setNewTaskName(''); // 입력 필드 초기화
      } else {
        console.error('API error:', json.message);
      }
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  // 작업 정렬: 오름차순으로 정렬 (작업이 오래된 순서)
  const sortedTasks = [...tasks].sort((a, b) => a.no - b.no);

  return (
    <div className={Task_List}>
      <ul>
        {sortedTasks.map(task => (
          <Task key={task.no} task={task} onToggle={onTaskToggle} onRemove={onRemove} />
        ))}
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