import React from "react";
import { projectElem } from "./worksBlock";
import styles from './blockCard.module.scss'

export const BlockCard:React.FC<projectElem> = ({image, title, link}) => {
	return (
		<section className={styles.blockWrapper} style={{backgroundImage: `url(${image})`}}>
			<a href={link}>
				{title}
			</a>
		</section>
	)
}