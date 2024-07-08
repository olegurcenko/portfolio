import React from "react";
import ilustrImg from './images/avatar.jpg';
import styles from './topInfoBlock.module.scss';

export const TopInfoBlock:React.FC = () => {
	return (
		<section className={styles.topInfoBlockWrapper}>
			<p className={styles.text}>I am a communicative full-stack developer with strong team skills. My quick comprehension, technical understanding, and abstract-logical thinking enable me to handle tasks in my daily work routine.</p>
			<img className={styles.image} src={ilustrImg} alt="" />
		</section>
	)
}