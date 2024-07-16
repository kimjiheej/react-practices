import React from 'react';
import { Tab_Item } from './assets/scss/TabItem.scss';

function TabItem({ no, name, active, selectTab }) {
    return (
        <li 
            className={`${Tab_Item} ${active ? 'active' : ''}`}
            onClick={ () => {
                selectTab(no);
            }}>
            {name}
        </li>
    );
}
export default TabItem;

