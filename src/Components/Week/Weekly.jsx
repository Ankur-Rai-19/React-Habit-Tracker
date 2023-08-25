import React from "react";
import { useSelector } from "react-redux";

import styles from "../../Styles/Weekly.module.css";
import WeeklyCard from "./WeeklyCard";

const Weekly = () => {
    const habits = useSelector((state) => state.habitsReducer);
    console.log(habits);

    return (
        <div className={styles.container}>
            {habits.list.length === 0 ? (
                <p className={styles.no_hbt}>
                    Oops!! No habits yet. Start building a productive routine.
                </p>
            ) : (
                habits.list.map((habit, index) => (
                    <WeeklyCard habit={habit} key={index} />
                ))
            )}
        </div>
    );
};

export default Weekly;
