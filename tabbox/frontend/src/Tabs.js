import React from 'react';
import TabItem from './TabItem';
import {_Tabs} from './assets/scss/Tabs.scss';

function Tabs({tabs}) {
    return (
        <ul className={_Tabs}>
            {tabs.map(t => <TabItem key={t.no} name={t.name} active={t.active} />)}
        </ul>
    );
}

export default Tabs;