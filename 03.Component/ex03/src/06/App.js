import React, { Component } from 'react';
import './assets/scss/App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.outerRef = React.createRef();
        this.innerRef = React.createRef();
    }

    render() {
        return (
            <div
                ref={ref => {
                    this.outerRef = ref;
                }}
                className={'App'}
                onScroll={() => {
                    console.log(
                        this.outerRef.scrollTop,
                        this.outerRef.clientHeight,
                        this.innerRef.clientHeight
                    );
                }}
                style={{ height: '300px', overflowY: 'scroll' }}
            >
                <div
                    ref={ref => {
                        this.innerRef = ref;
                    }}
                >
                    <ul>
                        {Array.from({ length: 100 }, (_, i) => i + 1).map(e => (
                            <li key={e}>{`아이템 ${e}입니다.`}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
