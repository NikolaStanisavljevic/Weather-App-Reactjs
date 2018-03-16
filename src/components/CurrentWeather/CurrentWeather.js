import React from "react";
import classes from "./CurrentWeather.css";

const currentWeather = (props) => {

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateInstance = new Date();
    const day = dayNames[dateInstance.getDay()];
    const hour = dateInstance.getHours();
    const minute = dateInstance.getMinutes();

    return (
        <div className={classes.weather}>
            <p className={classes.city}>{props.city}</p>
            <p className={classes.date}> {day} {hour}:{minute}</p>
            <p className={classes.main}><img src={props.main} alt="icon"/></p>
            <p className={classes.temp}>{Math.round(props.temp)}ºc</p>
            <p className={classes.feel}>Feels like {Math.trunc(props.feel)} ºC</p>
        </div>
    )
};

export default currentWeather;