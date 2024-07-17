import React, { useState } from 'react';
import { _Task, Task_Remove } from './assets/scss/Task.scss';

function Task({ task, onRemove }) {
  const [isChecked, setIsChecked] = useState(task.done);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // isChecked 상태를 반전시킴
    // 여기에서 task.done 상태를 부모 컴포넌트로 업데이트할 수도 있습니다.
    // onToggleDone(task.no, !isChecked); // 예를 들어 부모 컴포넌트로 상태 업데이트 함수를 호출할 수 있습니다.
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