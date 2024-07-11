import React from 'react';
import './assets/css/App.css';
import TabboxList from './TabboxList';

function App() {

    const tabs = [
        {no: 1, name: '메뉴1', active: false, contents: '메뉴1의 뷰 내용'},
        {no: 2, name: '메뉴2', active: false, contents: '메뉴2의 뷰 내용'},
        {no: 3, name: '메뉴3', active: true, contents: '메뉴3의 뷰 내용'},
        {no: 4, name: '메뉴4', active: false, contents: '메뉴4의 뷰 내용'},
        {no: 5, name: '메뉴5', active: false, contents: '메뉴5의 뷰 내용'}
    ];

    return (
        <div id={'App'}>
            <TabboxList tabbox={tabs} />
        </div>
    );
}

export default App;