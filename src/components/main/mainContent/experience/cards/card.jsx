import React from "react";
import styles from './card.module.css'

export const Card = (props) => {
    let Technologies = props.technologies.map(technology => {
        <li className={styles.technologiesListElem}>{technology}</li>
    })
    return (
        <div className={styles.card}>
            <p className={styles.date}>{props.date}</p>
            <ul className={styles.content}>
                <li className={styles.titles}>
                    <p className={styles.who}>{props.who}</p>
                    <p className={styles.where}>{props.where}</p>
                </li>
                <li className={styles.description}>{props.description}</li>
                <li className={styles.technologies}>
                    <ul className={styles.technologiesList}>
                        {Technologies}
                        
                    </ul>
                </li>
            </ul>
        </div>
    )
}