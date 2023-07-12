import React from "react";
import { About } from "./about/about";
import { Route, Routes } from 'react-router-dom';
import { Experience } from "./experience/experience";
import { Projects } from "./projects/projects";

export const MainContent = (props) => {
    return (
        <div className={props.styles.mainContent}>
            <Routes>
                <Route path='/about' element={<About styles={props.styles}/>}/>
                <Route path='/experience' element={<Experience styles={props.styles} CardData={props.CardData}/>}/>
                <Route path="/projects" element={<Projects styles={props.styles} CardDataProjects={props.CardDataProjects}/>}/>
            </Routes>
        </div>
    )
}