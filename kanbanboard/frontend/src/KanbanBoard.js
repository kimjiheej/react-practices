import React, { useEffect, useState } from 'react';
import { Kanban_Board } from './assets/scss/KanbanBoard.scss';
import CardList from './CardList';

function KanbanBoard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('/api/card');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json();
        if (json.result === 'success') {
          setCards(json.data || []);
        } else {
          console.error('API error:', json.message);
        }
      } catch (err) {
        console.error('Error fetching cards:', err);
      }
    };

    fetchCards();
  }, []);

  const toDoCards = cards.filter(card => card.status === "ToDo");
  const inProgressCards = cards.filter(card => card.status === "Doing");
  const doneCards = cards.filter(card => card.status === "Done");

  const handleAddTask = async (cardNo, taskName) => {
    try {
      const response = await fetch('/api/registerTask', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: taskName,
          done: 'N', // default to not done
          card_no: cardNo,
        }),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const json = await response.json();
      if (json.result === 'success') {
        fetchCards(); // 새 작업이 성공적으로 추가되면 카드 목록을 다시 가져옵니다.
      } else {
        console.error('API error:', json.message);
      }
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  return (
    <div className={Kanban_Board}>
      <CardList title="To Do" cards={toDoCards} onAddTask={(taskName) => handleAddTask(toDoCards[0]?.no, taskName)} />
      <CardList title="Doing" cards={inProgressCards} onAddTask={(taskName) => handleAddTask(inProgressCards[0]?.no, taskName)} />
      <CardList title="Done" cards={doneCards} onAddTask={(taskName) => handleAddTask(doneCards[0]?.no, taskName)} />
    </div>
  );
}

export default KanbanBoard;