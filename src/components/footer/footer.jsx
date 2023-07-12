import React from "react";
import gitLogo from './img/github.png';
import instLogo from './img/instLogo.png';
import tgLogo from './img/tgLogo.png';
import gmailLogo from './img/gmailLogo.png';

export const Footer = (props) => {
    return (
        <div className={props.styles.footer}>
            <ul className={props.styles.footerList}>
                <li className={props.styles.footerListElem}>
                    <a href="https://github.com/olegurcenko"><img src={gitLogo} alt="" />
                    </a>
                </li>
                <li className={props.styles.footerListElem}>
                    <a href="https://www.instagram.com/abuser_79/"><img src={instLogo} alt="" />
                    </a>
                </li>
                <li className={props.styles.footerListElem}>
                    <a href="https://t.me/user_3217"><img src={tgLogo} alt="" />
                    </a>
                </li>
                <li className={props.styles.footerListElem}>
                    <a href="mailto:https://mail.google.com/mail/u/0/?pli=1#inbox"><img src={gmailLogo} alt="" />
                    </a>
                </li>
            </ul>
        </div>
    )
}