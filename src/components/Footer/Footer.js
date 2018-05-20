import React from "react";
import classes from "./Footer.css";
import HumidIcon from "../../img/Humidity.png";
import WindIcon from '../../img/wind.png';

const footer = props => {
  return (
    <div className={classes.footer}>
      <img
        src={HumidIcon}
        className={classes.img1}
        alt="Humidity"
      />
      <p className={classes.humidity}>
        Humidity: <span className={classes.span1}>{props.humidity} %</span>
      </p>
      <img
        src={WindIcon}
        className={classes.img2}
        alt="Wind"
      />
      <p className={classes.wind}>
        Wind speed: <span className={classes.span2}>{props.wind} kmh</span>
      </p>
    </div>
  );
};

export default footer;
