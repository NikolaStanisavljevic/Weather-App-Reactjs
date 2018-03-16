
import React from 'react';
import classes from './Footer.css';

const footer = (props) => {
    return (
        <div className={classes.footer}>
            <img src={require('../../img/Humidity.png')} className={classes.img1} alt='Humidity'/>
            <p className={classes.humidity}>Humidity: <span className={classes.span1}>{props.humidity} %</span></p>
            <img src={require('../../img/wind.png')} className={classes.img2} alt='Wind'/>
            <p className={classes.wind}>Wind speed: <span className={classes.span2}>{props.wind} kmh</span></p>
        </div>
    )
};

export default footer;