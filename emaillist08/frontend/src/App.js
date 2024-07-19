import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

function App() {
    const [emails, setEmails] = useState(null); 


    // async 의 의미는 비동기 함수임을 의미한다. fetch 는 javascript 에서 네트워크 요청을 만들기 위한 내장 함수이다. 
    // Promise 를 반환하고 비동기적인 방식으로 작동한다. 
    // fetch 를 사용해서 서버에 HTTP 요청을 보낼 수 있다. get.post.delete 등의 메서드 사용가능 
    // email 같은 경우는 밖에서 사용자가 부른 것이다. 
    const addEmail = async (email) => {
        try {
            const response = await fetch('/api', {
                method: 'post',
                headers: {
                    // json 형식의 데이터를 받아내겠다는 의미이다. 
                    'Accept': 'application/json',
                    // 클라이언트가 서버로 전송하는 데이터의 형식을 명시한다. 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email)
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            // fetch 함수로부터 반환된 http 응답 객체에서 Json 형식의 데이터를 파싱하여 자바스크립트 객체로 변환하는 역할을 한다. 
            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(json.message);
            }

            // 기존의 emails 배열에 json.data 를 추가한다. 
            // json.data 가 새로운 배열의 첫 번째 요소로 추가된다. emails 배열 요소들은 그 뒤에 이어진다. 
            setEmails([json.data, ...emails]); 
        } catch (err) {
            console.error(err);
        }
    };

    const fetchEmails = async (keyword) => {
        try {
            const response = await fetch(`/api?kw=${keyword ? keyword : ''}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(json.message);
            }

            setEmails(json.data);
        } catch (err) {
            console.error(err);
        }
        
    };

    const deleteEmail = async (id) => {
        try {
            const response = await fetch(`/api/${id}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
    
            const json = await response.json();
    
            if (json.result !== 'success') {
                throw new Error(json.message);
            }
    
            // 삭제 후 목록 다시 가져오기
            fetchEmails();
        } catch (err) {
            console.error('삭제 오류:', err);
        }
    };

    useEffect(() => {
        fetchEmails();
    }, []);

    return (
        <div id={'App'}>
            <RegisterForm addEmail={addEmail} />
            <SearchBar fetchEmails={fetchEmails} />
            <Emaillist emails={emails} onDelete={deleteEmail} />
        </div>
    );
}

export default App;