import React from "react";
import styles from './runningString.module.scss';


interface RunningStringProps {
  strToRun: string;
}

export const RunningString: React.FC<RunningStringProps> = React.memo(({ strToRun }) => {
  return (
    <section className={styles.runningStrElem}>
      <section className={styles.stringInner}>
        <span>{strToRun}</span>
        <span>{strToRun}</span>
        <span>{strToRun}</span>
        <span>{strToRun}</span>
      </section>
    </section>
  );
});
