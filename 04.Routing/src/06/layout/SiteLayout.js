import React from 'react';
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import * as styles from '../assets/scss/layout/Content.scss';

export default function SiteLayout({children, name}) {
    return (
        <>
            <Header/>
            <div className={styles.Content}>
                {children}
            </div>
            <Navigation/>
            <Footer/>
        </>
    );
}