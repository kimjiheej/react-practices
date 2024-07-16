import React, {useState} from 'react';

export default function App() {
    const [color, setColor] = useState('#000000');

    return (
        <>
            <h2>ex05 - Component LifeCycle</h2>
            <button
                onClick={() => setColor(`#${Math.floor((Math.random() * 0x00ffffff)).toString(16)}`)}>
                색상변경
            </button>
            <br/>
            <input type='checkbox' /> 컴포넌트 보기
        </>
    );
}