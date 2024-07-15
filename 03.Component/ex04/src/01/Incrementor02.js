import React, {useState} from 'react';

function Incrementor02 ({begin, step}) {

    
    // 첫번째는 현재의 값이고 두번째는 값을 변경시킬 수 있는 함수이다. 
    // useState 는 배열을 반환해주게 된다. 
    // useState 안에 있는 값은 초기값의 설정이다. 
     const [val, setVal] = useState(begin); 
     const [val2, setVal2] = useState(20); 
 
    return (
        <div>
            <button onClick={() => {
                setVal(val + step); 
            }}>
                <strong>
                    {'+'}
                </strong>
            </button>
            {' '}
            <span>
                {val}
            </span>
        </div>
    );
}

export default Incrementor02; 

// 상태의 응용 ~~


