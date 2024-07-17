import React from 'react';
import { Input_Add_Task, Task_List } from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({ tasks, isToDo, onTaskToggle, onRemove }) {
  const handleAddTask = (e) => {
    e.preventDefault();
    // 작업 추가 로직을 구현합니다
    // 예시:
    // const newTask = { no: tasks.length + 1, name: e.target.value, done: false };
    // onAddTask(newTask);
    e.target.reset();
  };

  return (
    <div className={Task_List}>
      <ul>
        {tasks.map(task => (
          <Task key={task.no} task={task} onToggle={onTaskToggle} onRemove={onRemove} />
        ))}
      </ul>
      {isToDo && (
        <input className={Input_Add_Task} type="text" placeholder="태스크 추가" onSubmit={handleAddTask} />
      )}
    </div>
  );
}

export default TaskList;