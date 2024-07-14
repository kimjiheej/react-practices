import React from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import {Tab_Box} from './assets/scss/TabBox.scss';

function TabBox() {

    const tabs = [
        {no: 1, name: '메뉴1', active: false, contents: '메뉴1의 뷰 내용'},
        {no: 2, name: '메뉴2', active: false, contents: '메뉴2의 뷰 내용'},
        {no: 3, name: '메뉴3', active: true, contents: '메뉴3의 뷰 내용'},
        {no: 4, name: '메뉴4', active: false, contents: '메뉴4의 뷰 내용'},
        {no: 5, name: '메뉴5', active: false, contents: '메뉴5의 뷰 내용'},
        {no: 6, name: '메뉴6', active: false, contents: '메뉴6의 뷰 내용'},
        {no: 7, name: '메뉴7', active: false, contents: '메뉴7의 뷰 내용'}
    ];

    return (
        <div className={Tab_Box}>
            <Tabs tabs={tabs.map(e => {
                const {contents, ...rest} = e;
                return rest;
            })}/>
            <TabView />
        </div>
    );
}

export default TabBox;