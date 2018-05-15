import React from "react";
import classes from "./Form.css";

const form = props => {
  return (
    <form onSubmit={props.changed} className={classes.form}>
      <input
        type="text"
        placeholder="Enter city name please"
        name="city"
        className={classes.input}
      />
      <button className={classes.button}>
        <img src={require("../../img/search.png")} alt="search" />
      </button>
    </form>
  );
};

export default form;
