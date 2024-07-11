import React from 'react';
import TabboxItem from './TabboxItem';

function TabboxList({ tabbox }) {
    return (
        <div className={'tab-box'}>
            <ul>
                {tabbox.map((tab, index) => (
                    <TabboxItem
                        key={index}
                        name={tab.name}
                        active={tab.active}
                        contents={tab.contents}
                    />
                ))}
            </ul>
            <div>
                {tabbox.find(tab => tab.active)?.contents}
            </div>
        </div>
    );
}

export default TabboxList;