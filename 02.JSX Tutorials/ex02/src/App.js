import React from 'react';

/*
   오류:
     
   return ( 
     React.createElement('h1', null, 'Ex02');  <h1>EX02</h1>)
   );


이유: transpile 에러! 
   return ( 
      React.createElement('h1',null, 'EX02'); 
      React.createElemenet('p', null, '특징2: Single Root'); 
    
);

해결: 
    return (
       <div> 
       <h1>EX02</h1> 
       <p>특징2: Single Root</p> 
       </div>
       )

    transpile 

    return (
       React.createElement('div',null,'Ex02'), 
       React.createElement('p', null,'특징2:Single Root')
); 
*/

  return ( 
    <>
      <h1>Ex02</h1>
      <p>특징2: Single Root</p>
     </>

  );
 
}

export {App}; 