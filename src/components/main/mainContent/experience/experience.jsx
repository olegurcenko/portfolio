import React from "react";
import styles from './experience.module.css';
import { MyCards } from "./cards/cards";

export const Experience = (props) => {
    return (
        <div>
            <MyCards CardData={props.CardData}/>
        </div>
    )
}