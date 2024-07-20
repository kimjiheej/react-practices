import React, { useState, useRef, useEffect } from 'react';
import { Input_Add_Task, Task_List } from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({ tasks, onTaskToggle, onRemove, onAddTask, cardNo }) {
  const [newTaskName, setNewTaskName] = useState('');
  const endOfTasksRef = useRef(null); // 태스크 리스트 끝에 위치할 참조

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
        onAddTask(json.data); // 새 태스크를 추가
        setNewTaskName(''); // 입력 필드 초기화
      } else {
        console.error('API error:', json.message);
      }
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  // 태스크를 추가하는 순서 유지: 최신 태스크가 아래로 가게 하기
  const sortedTasks = [...tasks]; // 정렬을 제거하여 순서 유지

  // 새 태스크 추가 후 자동 스크롤
  useEffect(() => {
    if (endOfTasksRef.current) {
      endOfTasksRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [tasks]); // 태스크가 변경될 때마다 자동으로 스크롤

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