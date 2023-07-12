import React from "react";

export const CardProjects = (props) => {
    let keywords = props.projectTechn.map(technology => {
        return (
            <li className={props.styles.techKeyword}>{technology}</li>
        )})
    return (
        <div className={props.styles.projectCard}>
            <span className={props.styles.demoImgContainer}>
                <img className={props.styles.demoImg} src={props.demoImg} alt=""/>
            </span>
            <ul className={props.styles.textList}>
                <li className={props.styles.projectName}>
                    <a href="">{props.projectName}</a>
                </li>
                <li className={props.styles.projectDescr}>
                    <p>{props.projectDescr}</p>
                </li>
                <li className={props.styles.projectTechn}>
                    <ul className={props.styles.keywords}>
                        {keywords}
                    </ul>
                </li>
            </ul>
        </div>
    )
}