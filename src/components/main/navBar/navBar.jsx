import React from "react";
import styles from './navBar.module.css';
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => {
    if (isActive) {
        return styles.isActiveLink
    }
} 
// isActive ? '' + `${styles.activeLink}` : "";

export const NavBar = (props) => {
    return (
        <div className={styles.navBar}>
            <ul>
                <li>
                    <p className={styles.nameStr}>Oleh Yurchenko</p>
                </li>
                <li>
                    <p className={styles.positionStr}>Junior Web-Developer</p>
                </li>
                <li>
                    <span className={styles.skillsStr}>
                        <p>I build accessible, inclusive products and</p>
                        <p>digital experiences for the web.</p>
                    </span>
                </li>
            </ul>
            <ul className={styles.navBarList}>
                <div className={styles.navBarElem}>
                    <NavLink className={setActive} to='/about'>
                        About
                    </NavLink>
                </div>
                <div className={styles.navBarElem}>
                    <NavLink className={setActive} to='/experience'>
                        Experience
                    </NavLink>
                </div>
                <div className={styles.navBarElem}>
                    <NavLink className={setActive} to='/projects'>
                        Projects
                    </NavLink>
                </div>
            </ul>
        </div>
    )
}