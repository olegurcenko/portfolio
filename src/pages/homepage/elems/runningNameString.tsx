import React from "react";
import styles from './runningString.module.scss'

export const RunningString:React.FC = () => {
	return (
		<section className={styles.runningStrElem}>
			<section className={styles.stringInner}>
				<span>Oleh Yurchenko</span>
				<span>Oleh Yurchenko</span>
				<span>Oleh Yurchenko</span>
				<span>Oleh Yurchenko</span>
			</section>
		</section>
	)
}