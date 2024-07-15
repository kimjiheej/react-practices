import React from 'react';
import { Tab_Item } from './assets/scss/TabItem.scss';

function TabItem({ name, active, selectTab }) {
    return (
        <li 
            className={`${Tab_Item} ${active ? 'active' : ''}`}
            onClick={selectTab} // 클릭 시 selectTab 함수 실행
        >
            {name}
            
        </li>
    );
}
export default TabItem;

