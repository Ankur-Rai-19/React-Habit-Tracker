import React from "react";
import { useDispatch } from "react-redux";
/*----------------Font Awesome Icon--------------------*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquare,
    faSquareCheck,
    faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";

import { addHabitStatus } from "../../Action";
import styles from "../../Styles/Home.module.css";

const ActionButton = (props) => {
    const { habit } = props;
    const dispatch = useDispatch();

    /* Creates an object with an empty `doneStatus` property and dispatches an action to add the habit status.*/
    const handleNoStatus = () => {
        const obj = {
            id: habit.id,
            doneStatus: "",
        };
        dispatch(addHabitStatus(obj));
    };

    /* Dispatches an action to update the done status of a habit.*/
    const handleDoneStatus = () => {
        const obj = {
            id: habit.id,
            doneStatus: "done",
        };
        dispatch(addHabitStatus(obj));
    };

    /*Dispatches an action to update the done status of a habit to "not done".*/
    const handleNotDoneStatus = () => {
        const obj = {
            id: habit.id,
            doneStatus: "notdone",
        };
        dispatch(addHabitStatus(obj));
    };

    return (
        <div className={styles.habitCardAction}>
            {habit.doneStatus === "" && (
                <span className={styles.habitCardCheckIcon}>
                    <FontAwesomeIcon
                        icon={faSquare}
                        onClick={handleDoneStatus}
                    />
                </span>
            )}

            {habit.doneStatus === "done" && (
                <span className={styles.habitCardCheckIcon}>
                    <FontAwesomeIcon
                        icon={faSquareCheck}
                        className={styles.doneIcon}
                        onClick={handleNotDoneStatus}
                    />
                </span>
            )}

            {habit.doneStatus === "notdone" && (
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

export default ActionButton;
