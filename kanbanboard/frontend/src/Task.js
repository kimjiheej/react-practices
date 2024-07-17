import React, { useState } from 'react';
import { _Task, Task_Remove } from './assets/scss/Task.scss';

function Task({ task, onRemove }) {
  const [isChecked, setIsChecked] = useState(false); // 초기 상태를 false로 설정

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // 부모 컴포넌트로 상태 변경을 선택적으로 전달할 수 있습니다
    // onToggleDone(task.no, !isChecked);
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
