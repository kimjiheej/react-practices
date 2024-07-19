import React, { useEffect } from 'react';
import {_Email} from './assets/scss/Email.scss';

function Email({ no, firstName, lastName, email, onDelete }) {
    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            await onDelete(no); // 삭제 콜백 호출
        } catch (err) {
            console.error('삭제 오류:', err);
        }
    };

    return (
        <li className={_Email}>
            <h4>{firstName} {lastName}</h4>
            <span>{email}</span>
            <button onClick={handleDelete}>삭제</button>
        </li>
    );
}

export default Email;

