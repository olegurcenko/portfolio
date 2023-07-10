import React from "react";
import styles from './projects.module.css';
import { CardProjects } from "./cards/cardsProjects";

export const Projects = (props) => {
    let cards = props.CardDataProjects.map(card => {
        return (
            <CardProjects projectTechn={card.projectTechn} demoImg={card.demoImg} projectName={card.projectName} projectDescr={card.projectDescr}/>
    )})
    return (
        <div className={styles.cardList}>
            {cards}
        </div>
    )
}