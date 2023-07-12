import React from "react";

export const Card = (props) => {
    const Technologies = props.technologies.map(technology => {
        return(
        <li className={props.styles.technologiesListElem}>{technology}</li>
    )})
    return (
        <div className={props.styles.experienceCard}>
            <p className={props.styles.date}>{props.date}</p>
            <ul className={props.styles.content}>
                <li className={props.styles.titles}>
                    <p className={props.styles.who}>{props.who}</p>
                    <p className={props.styles.where}>{props.where}</p>
                </li>
                <li className={props.styles.description}>{props.description}</li>
                <li className={props.styles.technologies}>
                    <ul className={props.styles.technologiesList}>
                        {Technologies}
                    </ul>
                </li>
            </ul>
        </div>
    )
}