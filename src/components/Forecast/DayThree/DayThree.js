import React from "react";
import classes from "./DayThree.css";

const dayThree = props => {
  return (
    // Display float as intiger
    <div className={classes.dayThree}>
      <p>Max {Math.trunc(props.max)} ºc</p>
      <p>Min {Math.trunc(props.min)} ºc</p>
      <img src={props.main} alt="icon" />
      <p>{String(props.date).replace(/-/g, ".")}</p>
    </div>
  );
};

export default dayThree;
