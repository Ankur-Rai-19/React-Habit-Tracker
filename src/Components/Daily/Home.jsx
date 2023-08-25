import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

import styles from "../../Styles/Home.module.css";
import { addHabit } from "../../Action";
import HabitCard from "./HabitCard";

const Home = () => {
    const [inputData, setInputData] = useState("");
    const habits = useSelector((state) => state.habitsReducer);
    // console.log("HABITS", habits);
    const dispatch = useDispatch();

    /*Dispatches action to add habit with the `inputData` value and then resets the `inputData` to an empty string.*/
    const handleAddHabit = () => {
        dispatch(addHabit(inputData));
        setInputData("");
        // Show a success notification
        toast.success("Habit added successfully!");
    };

    /* checks if the "Enter" key is pressed and calls the `handleAddHabit` function if it is.*/
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleAddHabit();
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.todaysDate}>{}</div>
            <div className={styles.addHabit}>
                <input
                    type="text"
                    placeholder="Enter Habit..."
                    value={inputData}
                    onChange={(event) => setInputData(event.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <span className={styles.addBtn} onClick={handleAddHabit}>
                    ADD
                </span>
            </div>
            <div className={styles.listHabit}>
                {habits.list.length === 0 ? (
                    <p className={styles.no_hbt}>
                        Oops!! No habits yet. Start building a productive
                        routine.
                    </p>
                ) : (
                    habits.list.map((habit) => (
                        <HabitCard habit={habit} key={habit.id} />
                    ))
                )}
            </div>
            {/* Toast container */}
            {/* <ToastContainer position="top-right" /> */}
            <ToastContainer position="top-right" />
        </div>
    );
};

export default Home;
