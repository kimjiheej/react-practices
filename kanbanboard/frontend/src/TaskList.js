import React, { useState, useRef, useEffect } from 'react';
import { Input_Add_Task, Task_List } from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({ tasks, onTaskToggle, onRemove, onAddTask, cardNo }) {
  const [newTaskName, setNewTaskName] = useState('');
  const endOfTasksRef = useRef(null); // 추가: 참조를 위한 useRef

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

  // 작업 정렬: 내림차순 정렬 (가장 최근 작업이 위에 오도록)
  const sortedTasks = [...tasks].sort((a, b) => b.no - a.no);

  // 새 태스크 추가 후 자동 스크롤
  useEffect(() => {
    if (endOfTasksRef.current) {
      endOfTasksRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [tasks]);

  return (
    <div className={Task_List}>
      <ul>
        {sortedTasks.map(task => (
          <Task key={task.no} task={task} onToggle={onTaskToggle} onRemove={onRemove} />
        ))}
        <div ref={endOfTasksRef} /> {/* 태스크 리스트의 끝에 위치한 참조 */}
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