import React from 'react'
import classes from './style.module.scss'

const TimeBox = ({time, title}) => {
    return (
        <div className={classes["time-box"]}>
            <div className={classes["time-box-number"]}>
                <h2>{time || "00"}</h2>
            </div>
            <div className={classes["time-box-title"]}>
                <h3>{title || "DATE"}</h3> 
            </div>
        </div>
    )
}

export default TimeBox