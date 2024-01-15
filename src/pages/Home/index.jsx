import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import {useCountdown} from '../../hooks/Countdown/index.jsx'

import Footer from '../components/Footer'
import TimeBox from '../components/TimeBox'

import RocketGif from '../../assets/rocket.gif'

import classes from './style.module.scss'

const Homepage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramDate = searchParams.get('date');
  const [date, dateSetter] = useState(paramDate || "2024-01-24");
  const [remainingTime, remainingTimeSetter] = useState(
    Math.floor((new Date(date).getTime() - new Date().getTime()) / 1000)
  );
  const [days, hours, minutes, seconds] = useCountdown(remainingTime);

  useEffect(() => {
    dateSetter(paramDate || "2024-01-24");
  }, [paramDate]);

  let isPastDate;
  if(new Date(date) < new Date()){
    isPastDate=true;
  }

  let isCountdownZero;
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    isCountdownZero = true
  }

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.content}>
        {isPastDate || isCountdownZero ? (
          <>
          <h1>WE HAVE LAUNCHED</h1>
          <img className={classes["rocket-gif"]} src={RocketGif} alt="rocket" />
          </>
          
        ) : (
          <>
            <h1>WE'RE LAUNCHING SOON</h1>
            <div className={classes["countdown-box"]}>
              <TimeBox time={days} title={"DAYS"} />
              <TimeBox time={hours} title={"HOURS"} />
              <TimeBox time={minutes} title={"MINUTES"} />
              <TimeBox time={seconds} title={"SECONDS"} />
            </div>
          </>
        )}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Homepage
