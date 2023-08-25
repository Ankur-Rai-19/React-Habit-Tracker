import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { deleteHabit } from "../../Action";
import styles from "../../Styles/Home.module.css";
import ActionButton from "./ActionButton";

const HabitCard = (props) => {
    const { habit } = props;
    var target = 7;
    var progress = 0;

    /* It checks if the doneStatus property of each weekday object is equal to "done". If it is, it increments the progress variable by 1. */
    for (let i = 0; i < 7; i++) {
        if (habit.weekdays[i].doneStatus === "done") {
            progress++;
        }
    }

    const dispatch = useDispatch();

    /* Dispatches a deleteHabit action with the habit's id as the payload.*/
    const handleDeleteHabit = () => {
        dispatch(deleteHabit(habit.id));
        // Show a success notification for deleting the habit
        toast.success("Habit deleted successfully!");
    };

    return (
        <div className={styles.habitCardContainer}>
            <div className={styles.habitCard}>
                <div className={styles.habitCardTitle}>
                    <div className={styles.habitActionName}>
                        <span>
                            <ActionButton habit={habit} />
                        </span>
                        <span className={styles.cardName}>
                            {`:   ${habit.name}`}
                        </span>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faTrash}
                            className={styles.deleteBtn}
                            onClick={handleDeleteHabit}
                        />
                    </div>
                </div>

                <div className={styles.weeklyProgress}>
                    <span>Target : {target} days / week</span>
                    <span>
                        Progress :{progress} / {target}{" "}
                    </span>
                </div>
            </div>
            {/* Add the ToastContainer here */}
            <ToastContainer position="top-right" />
        </div>
    );
};

export default HabitCard;
