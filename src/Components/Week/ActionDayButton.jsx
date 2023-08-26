import React from "react";
import { useDispatch } from "react-redux";
/*----------------Font Awesome Icon--------------------*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquare,
    faSquareCheck,
    faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";

import { addWeeklyDoneStatus } from "../../Action";
import styles from "../../Styles/Home.module.css";

const ActionDayButton = (props) => {
    const { habit, index } = props;

    const dispatch = useDispatch();

    /* Dispatches an action to add a weekly done status with an empty value for a habit.*/
    const handleNoStatus = () => {
        const obj = {
            id: habit.id,
            doneStatus: "",
            index: index,
        };
        dispatch(addWeeklyDoneStatus(obj));
    };

    /* Dispatches an action to add a weekly done status for a habit.*/
    const handleDoneStatus = () => {
        const obj = {
            id: habit.id,
            doneStatus: "done",
            index: index,
        };
        dispatch(addWeeklyDoneStatus(obj));
    };

    /* Dispatches an action to update the weekly done status of a habit to "not done".*/
    const handleNotDoneStatus = () => {
        const obj = {
            id: habit.id,
            doneStatus: "notdone",
            index: index,
        };
        dispatch(addWeeklyDoneStatus(obj));
    };

    return (
        <div className={styles.habitCardAction}>
            {habit.weekdays[index].doneStatus === "" && (
                <span className={styles.habitCardCheckIcon}>
                    <FontAwesomeIcon
                        icon={faSquare}
                        onClick={handleDoneStatus}
                    />
                </span>
            )}

            {habit.weekdays[index].doneStatus === "done" && (
                <span className={styles.habitCardCheckIcon}>
                    <FontAwesomeIcon
                        icon={faSquareCheck}
                        className={styles.doneIcon}
                        onClick={handleNotDoneStatus}
                    />
                </span>
            )}

            {habit.weekdays[index].doneStatus === "notdone" && (
                <span className={styles.habitCardCrossIcon}>
                    <FontAwesomeIcon
                        icon={faSquareXmark}
                        onClick={handleNoStatus}
                    />
                </span>
            )}
        </div>
    );
};

export default ActionDayButton;
