import React from 'react';
import {useNavigate} from 'react-router';
import * as styles from '../../assets/scss/component/About.scss';

export default function About() {
    const navigate = useNavigate();

    setTimeout(() => {
        // window.location.href='/error';
        navigate('/error');
    }, 2000);

    return (
            <div className={styles.About}>
                <h2>kickscar 입니다.</h2>
            </div>
    );
}