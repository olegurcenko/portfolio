import React from "react";
import { MyCards } from "./cards/cards";

export const Experience = (props) => {
    return (
        <div>
            <MyCards styles={props.styles} CardData={props.CardData}/>
        </div>
    )
}