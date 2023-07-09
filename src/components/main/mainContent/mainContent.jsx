import React from "react";
import styles from './mainContent.module.css';
import { About } from "./about/about";
import { Route, Routes } from 'react-router-dom';
import { Experience } from "./experience/experience";

export const MainContent = (props) => {
    return (
        <div className={styles.mainContent}>
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/experience' element={<Experience CardData={props.CardData}/>}/>
            </Routes>
        </div>
    )
}