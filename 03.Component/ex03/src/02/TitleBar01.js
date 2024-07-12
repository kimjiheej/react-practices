import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler(event) {
        console.log('TitleBar01: clicked!'); 
    }
    render() {
        return (
            <div>
                <h4 onClick={onHandler}>
                    Function Handler in Class Component(click here!)
                </h4>
            </div>
        );
    }
}


