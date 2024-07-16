import React, {Component} from 'react';
import './assets/scss/Clock.scss';

class Clock extends Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <div className={"clock-field"}>
                    <div>
                        <p className={"hours"}>{this.props.hours}</p>
                        <p className={"placeholder"}></p>
                    </div>
                    <div className={"colon"}>
                        <p>:</p>
                    </div>
                    <div className={"numbers"}>
                        <p>{this.props.minutes}</p>
                        <p className={"placeholder"}></p>
                    </div>
                    <div className={"colon"}>
                        <p>:</p>
                    </div>
                    <div className={"numbers"}>
                        <p>{this.props.seconds}</p>
                        <p className={"placeholder"}></p>
                    </div>
                    <div className={"AmPm"}>
                        <div>
                            <p className={this.props.meridiem === 'am' ? 'on' : 'off'}>am</p>
                        </div>
                        <div>
                            <p className={this.props.meridiem === 'pm' ? 'on' : 'off'}>pm</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Clock;