import React, { useState } from 'react';
import { Input_Add_Task, Task_List } from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({ tasks, isToDo, onTaskToggle, onRemove }) {
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (newTaskName.trim() === '') return;

    try {
      const response = await fetch('/api/registerTask', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newTaskName,
          done: false,
          card_no: tasks[0]?.card_no, // assuming all tasks belong to the same card
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const json = await response.json();
      setTasks([...tasks, json.data]);
      setNewTaskName('');
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  return (
    <div className={Task_List}>
      <ul>
        {tasks.map(task => (
          <Task key={task.no} task={task} onToggle={onTaskToggle} onRemove={onRemove} />
        ))}
      </ul>
      {isToDo && (
        <form onSubmit={handleAddTask}>
          <input
            className={Input_Add_Task}
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="태스크 추가"
          />
          <button type="submit">추가</button>
        </form>
      )}
    </div>
  );
}

export default TaskList;