import React from "react";
import ilustrImg from './images/Jetpack.jpg';
import styles from './topInfoBlock.module.scss';

export const TopInfoBlock:React.FC = () => {
	return (
		<section className={styles.topInfoBlockWrapper}>
			<p className={styles.text}>Welcome to my portfolio, {'\n'}where you'll find a showcase{'\n'}of my diverse web development projects,{'\n'}illustrating my journey through{'\n'}different facets of the digital{'\n'}world.</p>
			<img className={styles.image} src={ilustrImg} alt="" />
		</section>
	)
}