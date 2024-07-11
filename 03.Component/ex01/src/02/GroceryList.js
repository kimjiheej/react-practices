import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList({ groceries }) {
    return (
        <ol className={'grocery-list'}>
            {groceries.map((grocery, index) => (
                <GroceryItem 
                    key={index} 
                    name={grocery.name} 
                    count={grocery.count} 
                />
            ))}
        </ol>
    );
}

export default GroceryList;