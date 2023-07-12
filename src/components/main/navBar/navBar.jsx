import React from "react";
import { NavLink } from "react-router-dom";

// isActive ? '' + `${styles.activeLink}` : "";

export const NavBar = (props) => {
    const setActive = ({ isActive }) => {
        if (isActive) {
            return props.styles.isActiveLink
        }
    } 
    return (
        <div className={props.styles.navBar}>
            <ul>
                <li>
                    <p className={props.styles.nameStr}>Oleh Yurchenko</p>
                </li>
                <li>
                    <p className={props.styles.positionStr}>Junior Web-Developer</p>
                </li>
                <li>
                    <span className={props.styles.skillsStr}>
                        <p>I build accessible, inclusive products and</p>
                        <p>digital experiences for the web.</p>
                    </span>
                </li>
            </ul>
            <ul className={props.styles.navBarList}>
                <div className={props.styles.navBarElem}>
                    <NavLink className={setActive} to='/about'>
                        About
                    </NavLink>
                </div>
                <div className={props.styles.navBarElem}>
                    <NavLink className={setActive} to='/experience'>
                        Experience
                    </NavLink>
                </div>
                <div className={props.styles.navBarElem}>
                    <NavLink className={setActive} to='/projects'>
                        Projects
                    </NavLink>
                </div>
            </ul>
        </div>
    )
}