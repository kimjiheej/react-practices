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

        // JSON 데이터 출력
        console.log('Fetched JSON:', json);

        if (json.result === 'success') {
          setCards(json.data || []); // 데이터가 없을 경우 빈 배열로 초기화
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

  return (
    <div className={Kanban_Board}>
      <CardList title="To Do" cards={toDoCards} />
      <CardList title="Doing" cards={inProgressCards} />
      <CardList title="Done" cards={doneCards} />
    </div>
  );
}

export default KanbanBoard;