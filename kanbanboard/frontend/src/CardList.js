import React from 'react';
import { Card_List } from './assets/scss/CardList.scss';
import Card from './Card';

function CardList({ title, cards }) {
  return (
    <div className={Card_List}>
      <h1>{title}</h1>
      {cards.map(card => (
        <Card key={card.no} {...card} isToDo={card.status === "ToDo"} />
      ))}
    </div>
  );
}

export default CardList;