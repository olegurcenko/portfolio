import React from "react";
import { CardProjects } from "./cards/cardsProjects";

export const Projects = (props) => {
    let cards = props.CardDataProjects.map(card => {
        return (
            <CardProjects styles={props.styles} projectTechn={card.projectTechn} demoImg={card.demoImg} projectName={card.projectName} projectDescr={card.projectDescr}/>
    )})
    return (
        <div className={props.styles.projectCardList}>
            {cards}
        </div>
    )
}