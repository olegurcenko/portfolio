import React from "react";
import { Card } from "./card";
import styles from './cards.module.css';

export const MyCards = (props) => {


    let Cards = props.CardData.map(card => {
        let cardElem = <Card technologies={card.technologiesList} date={card.date} who={card.who} where={card.where} description={card.description} />
        return cardElem;
    })



    return (
        <div className={styles.cardList}>
            {/* {cardElems} */}
            {Cards}
        </div>
    )
}