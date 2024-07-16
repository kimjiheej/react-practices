import React, {useState, useEffect} from 'react';

export default function Hook({ color }) {
    return (
        <>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: color
                } } />
            <input
                type='text' />
        </>
    );
}