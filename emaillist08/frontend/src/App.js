import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

function App() {
    const [emails, setEmails] = useState(null);

    const addEmail = async (email) => {
        try {
            const response = await fetch('/api', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email)
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(json.message);
            }

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