import React from "react"; 
import styles from './header.module.css'

export const Header = (props) => {
    return (
        <div className={styles.header}>
            <ul className={styles.headerContent}>
            <ul className={styles.headerList}>
                <li className={styles.headerElem}>
                    <a href="#">
                        <img src="https://static.vecteezy.com/system/resources/previews/006/414/204/original/internet-web-icon-in-trendy-flat-style-isolated-on-white-background-website-symbol-for-your-website-design-logo-app-ui-illustration-free-vector.jpg" alt="Logo" />
                    </a>
                </li>
            </ul>
            <ul className={styles.headerList}>
            <li className={styles.headerElem}>
                    <a href="#">
                        <p>
                            F elem
                        </p>
                        </a>
                </li>
                <li className={styles.headerElem}>
                    <a href="#">
                        <p>
                            S elem
                        </p>
                        </a>
                </li>
                <li className={styles.headerElem}>
                    <a href="#">
                        <p>
                            T elem
                        </p>
                        </a>
                </li>
            </ul>
            </ul>
            <div className={styles.whiteline}></div>
        </div>
    )
}