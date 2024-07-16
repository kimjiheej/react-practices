import React, { useState } from 'react';
import './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleRemove = (id) => {
    setTaskList(taskList.filter(task => task.no !== id));
  };

  return (
    <div className="Task_List">
      <ul>
        {taskList.map(task => (
          <Task key={task.no} task={task} onRemove={handleRemove} />
        ))}
      </ul>
      <input className="Input_Add_Task" type="text" placeholder="태스크 추가" />
    </div>
  );
}

export default TaskList;