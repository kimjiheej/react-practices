import React from 'react'; 
import {Tab_View} from './assets/scss/TabView.scss'; 

function TabView({contents}) {
    return (
        <div>
            <div className={Tab_View}>
               {contents}
            </div>
        </div>
    );
}

export default TabView; 