import React from 'react';

function TabboxItem({ name, active }) {
    return (
        <li className={active ? 'active' : ''}>
            {name}
        </li>
    );
}

export default TabboxItem;