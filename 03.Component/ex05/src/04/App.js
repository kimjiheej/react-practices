import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    return(
        <>
            <Clock
                title={`ex05: Clock Component II: 0`}
                hours={12}
                minutes={0}
                seconds={0} />
        </>
    );    
}