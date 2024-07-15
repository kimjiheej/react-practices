import React, {useState} from 'react'; 
import Tabs from './Tabs'; 
import TabView from './TabView'; 
import {Tab_Box} from './assets/scss/TabBox.scss'; 
import tabs from './assets/json/data';

function TabBox() {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
     <div className={Tab_Box}>
        <Tabs tabs={tabs.map((e, i) =>{
            const {contents, ...rest} = e;
            
            if(i === activeIndex ){
                rest.active = true; 
            }
            // activeIndex 를 가지고 rest 중에 해당되는 activeIndex 의 번호 
            // 의 active 를 true 시켜놓아라. 
            // 0번이 select 가 될 것이야 
            // 0 번에 있는 active 를 true 시켜라 (이게 정답임) 

            return rest;
        })} />
        <TabView contents={tabs[activeIndex].contents} />
     </div>

    ); 
}
export default TabBox; 



