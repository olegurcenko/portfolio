import React from "react";
import styles from './worksBlock.module.scss'
import { BlockCard } from "./blockCard";

export interface projectElem {
	image: string
	title: string
	link: string
}

export const WorksBlock:React.FC = () => {
	const projectsList:projectElem[] = [
		{
			image: 'https://github.com/olegurcenko/chatbot/raw/main/Screenshots/image.png',
			title: 'Chatbot with OpenAI API',
			link: 'https://github.com/olegurcenko/chatbot'
		},
		{
			image: 'https://github.com/olegurcenko/technostore/raw/main/Screenshots/photo_2024-01-31_09-17-51.jpg',
			title: 'Technostore with backend',
			link: 'https://github.com/olegurcenko/technostore'
		}
	]
	return (
		<section className={styles.projectsBlock}>
			<h2 className={styles.title}>Projects</h2>
			<p className={styles.projectsDesct}>Explore my projects, ranging from clean and simple web designs to advanced web applications. Dive into my journey with insights into my early programming experiences, experimentation with various technologies, and creative graphic design work. No fluff, just a genuine look into my web development world. Enjoy exploring!</p>
			<ul className={styles.projectCardsList}>
				{projectsList.map((elem, index) => <BlockCard key={index} {...elem}/>)}
			</ul>
		</section>
	)
}
