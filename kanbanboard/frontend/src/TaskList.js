import React, { useState } from 'react';
import { Input_Add_Task, Task_List } from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({ tasks, onTaskToggle, onRemove, onAddTask }) {
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskName.trim() !== '') {
      onAddTask(newTaskName); // 작업 추가 로직
      setNewTaskName(''); // 입력 필드 초기화
    }
  };

  return (
    <div className={Task_List}>
      <ul>
        {tasks.map(task => (
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