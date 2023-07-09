import React from "react";
import styles from './footer.module.css';
import gitLogo from './img/github.png';
import instLogo from './img/instLogo.png';
import tgLogo from './img/tgLogo.png';
import gmailLogo from './img/gmailLogo.png';

export const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <ul className={styles.footerList}>
                <li className={styles.footerListElem}>
                    <a href="#"><img src={gitLogo} alt="" />
                    </a>
                </li>
                <li className={styles.footerListElem}>
                    <a href="#"><img src={instLogo} alt="" />
                    </a>
                </li>
                <li className={styles.footerListElem}>
                    <a href="#"><img src={tgLogo} alt="" />
                    </a>
                </li>
                <li className={styles.footerListElem}>
                    <a href="#"><img src={gmailLogo} alt="" />
                    </a>
                </li>
            </ul>
        </div>
    )
}