import React, { useState } from 'react';
import { _Task, Task_Remove } from './assets/scss/Task.scss';

function Task({ task, onToggle, onRemove }) {
  const [isChecked, setIsChecked] = useState(task.done === 'Y');

  const handleCheckboxChange = () => {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);
    onToggle(task.no, newCheckedStatus); // 상태 변경 함수 호출
  };

  return (
    <li className={_Task}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {task.name}
      <a href="#" className={Task_Remove} onClick={() => onRemove(task.no)}></a>
    </li>
  );
}

export default Task;