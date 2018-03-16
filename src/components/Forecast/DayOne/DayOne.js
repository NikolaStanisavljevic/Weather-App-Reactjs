import React from 'react';
import classes from './DayOne.css';


const dayOne = (props) => {
    return (
        <div className={classes.dayOne}>
            <p>Max {Math.trunc(props.max)} ºc</p>
            <p>Min {Math.trunc(props.min)} ºc</p>
            <img src={props.main} alt="icon"/>
            <p>{String(props.date).replace(/-/g,".")}</p>

        </div>
    )
};

export default dayOne;