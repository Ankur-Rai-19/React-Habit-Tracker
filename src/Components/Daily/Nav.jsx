import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "../../Styles/Nav.module.css";

const Nav = () => {
    const d = new Date();
    /*Converting the current date `d` into a readable string format "Tue Aug 17 2021". */
    const d1 = d.toDateString();

    const location = useLocation();

    return (
        <div className={styles.topnav}>
            <div className={styles.navLeft}>
                <div className={styles.navLeftElem}>
                    <Link className={styles.decorationLogo} to="/">
                        Habit Tracker
                    </Link>
                </div>

                <div className={styles.navLeftElem}>
                    <Link
                        className={`${styles.decoration} ${
                            location.pathname === "/" ? styles.activeLink : ""
                        }`}
                        to="/"
                    >
                        Daily
                    </Link>
                </div>

                <div className={styles.navLeftElem}>
                    <Link
                        className={`${styles.decoration} ${
                            location.pathname === "/weekly"
                                ? styles.activeLink
                                : ""
                        }`}
                        to="/weekly"
                    >
                        Weekly
                    </Link>
                </div>
            </div>

            <div className={styles.navRightElem}>{`${d1}`}</div>
        </div>
    );
};

export default Nav;
