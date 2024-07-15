import React from 'react';
import TabItem from './TabItem';
import {_Tabs} from './assets/scss/Tabs.scss';

function Tabs({tabs, selectTab}) {
    return (
        <ul className={_Tabs}> {/* Use the class name directly */}
            {tabs.map((t, no) => (
                <TabItem 
                    key={t.no} 
                    name={t.name} 
                    active={t.active} 
                    no = {t.no}
                    selectTab={() => selectTab(no)} 
                />
            ))}
        </ul>
    );
}

export default Tabs;