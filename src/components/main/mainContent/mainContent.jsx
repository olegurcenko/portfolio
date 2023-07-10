import React from "react";
import styles from './mainContent.module.css';
import { About } from "./about/about";
import { Route, Routes } from 'react-router-dom';
import { Experience } from "./experience/experience";
import { Projects } from "./projects/projects";

export const MainContent = (props) => {
    return (
        <div className={styles.mainContent}>
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/experience' element={<Experience CardData={props.CardData}/>}/>
                <Route path="/projects" element={<Projects CardDataProjects={props.CardDataProjects}/>}/>
            </Routes>
        </div>
    )
}