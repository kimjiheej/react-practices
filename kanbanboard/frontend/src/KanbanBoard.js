import React from 'react';
import { Kanban_Board } from './assets/scss/KanbanBoard.scss';
import CardList from './CardList';
import data from './assets/json/data';

function KanbanBoard() {
  const toDoCards = data.filter(card => card.status === "ToDo");
  const inProgressCards = data.filter(card => card.status === "Doing");
  const doneCards = data.filter(card => card.status === "Done");

  return (
    <div className={Kanban_Board}>
      <CardList title="To Do" cards={toDoCards} />
      <CardList title="Doing" cards={inProgressCards} />
      <CardList title="Done" cards={doneCards} />
    </div>
  );
}

export default KanbanBoard;