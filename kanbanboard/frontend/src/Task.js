import React, { useState } from 'react';
import { _Task, Task_Remove } from './assets/scss/Task.scss';

function Task({ task, onToggle, onRemove }) {
  const [isChecked, setIsChecked] = useState(task.done === 'Y');

  const handleCheckboxChange = async () => {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);
    await onToggle(task.no, newCheckedStatus); // 서버에 상태 업데이트 요청
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    onRemove(task.no);
  };

  return (
    <li className={_Task}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {task.name}
      <a href="#" className={Task_Remove} onClick={handleRemoveClick}></a>
    </li>
  );
}

export default Task;