import React, { useState } from 'react';
import {Input_Add_Task, Task_List } from './assets/scss/TaskList.scss';

import Task from './Task';

function TaskList({ tasks, isToDo }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleRemove = (id) => {
    setTaskList(taskList.filter(task => task.no !== id));
  };

  const handleAddTask = (e) => {
    // 여기에 작업 추가 로직을 구현합니다
    // 예시:
    // const newTask = { no: taskList.length + 1, name: e.target.value, done: false };
    // setTaskList([...taskList, newTask]);
    e.preventDefault();
    // 작업 추가 후 인풋 필드를 초기화합니다
    e.target.reset();
  };

  return (
    <div className={Task_List}>
      <ul>
        {taskList.map(task => (
          <Task key={task.no} task={task} onRemove={handleRemove} />
        ))}
      </ul>
      {isToDo && (
        <input className={Input_Add_Task} type="text" placeholder="태스크 추가" onSubmit={handleAddTask} />
      )}
    </div>
  );
}

export default TaskList;