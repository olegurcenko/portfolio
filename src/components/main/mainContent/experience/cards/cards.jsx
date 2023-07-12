import React from "react";
import { Card } from "./card";

export const MyCards = (props) => {


    let Cards = props.CardData.map(card => {
        let cardElem = <Card styles={props.styles} technologies={card.technologiesList} date={card.date} who={card.who} where={card.where} description={card.description} />
        return cardElem;
    })



    return (
        <div className={props.styles.experienceCardList}>
            {/* {cardElems} */}
            {Cards}
        </div>
    )
}