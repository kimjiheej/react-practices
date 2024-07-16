import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='clock-display'>
                <Clock
                    title={'ex05: Clock Component I'}
                    hours={'00'}
                    minutes={'00'}
                    seconds={'00'}
                    meridiem={'pm'} />
            </div>
        );
    }
}