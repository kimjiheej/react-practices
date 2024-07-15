import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        // this.value = this.props.begin;
        // this.step = this.props.step;
        this.state = {
            val: this.props.begin,
            val2: 20,
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    // Anti-Pattern
                    // this.value += this.step;
                    // console.log(this.value);
                    // this.render(); // do not work

                    this.setState({
                        val: this.state.val + this.props.step
                    });
                }}>
                    <strong>
                        {'+'}
                    </strong>
                </button>
                {' '}
                <span>
                    {this.state.val}
                </span>
            </div>
        );
    }
}