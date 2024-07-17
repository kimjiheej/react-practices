import React from 'react';
import { Card_List} from './assets/scss/CardList.scss';
import {Input_Add_Task} from './assets/scss/TaskList.scss';
import Card from './Card';

function CardList({ title, cards, isToDo }) {
  return (
    <div className={Card_List}>
      <h1>{title}</h1>
      {cards.map(card => (
        <Card key={card.no} {...card} />
      ))}
      {isToDo && (
        <input className={Input_Add_Task} type="text" placeholder="태스크 추가" />
      )}
    </div>
  );
}

export default CardList;
