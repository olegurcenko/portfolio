import React from "react";
import styles from './cardsProjects.module.css';

export const CardProjects = (props) => {
    let keywords = props.projectTechn.map(technology => {
        return (
            <li className={styles.techYeyword}>{technology}</li>
        )})
    return (
        <div className={styles.card}>
            <span className={styles.demoImgContainer}>
                <img className={styles.demoImg} src={props.demoImg} alt=""/>
            </span>
            <ul className={styles.textList}>
                <li className={styles.projectName}>
                    <a href="">{props.projectName}</a>
                </li>
                <li className={styles.projectDescr}>
                    <p>{props.projectDescr}</p>
                </li>
                <li className={styles.projectTechn}>
                    <ul className={styles.keywords}>
                        {keywords}
                    </ul>
                </li>
            </ul>
        </div>
    )
}