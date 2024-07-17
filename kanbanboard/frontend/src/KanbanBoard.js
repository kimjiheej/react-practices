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
      <CardList title="To Do" cards={toDoCards} isToDo={true} />
      <CardList title="Doing" cards={inProgressCards} isToDo={false} />
      <CardList title="Done" cards={doneCards} isToDo={false} />
    </div>
  );
}

export default KanbanBoard;