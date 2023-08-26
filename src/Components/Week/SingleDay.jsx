import React from "react";

import styles from "../../Styles/Weekly.module.css";

const SingleDay = (props) => {
    const { day } = props;
    console.log(day);
    return (
        // div with a span element displaying the day value passed in as a prop.
        <div className={styles.singleDate}>
            <span> {day.day} </span>
        </div>
    );
};

export default SingleDay;
