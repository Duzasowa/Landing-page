import React, { Fragment } from 'react';

import '../style/clock.css'

const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
  return (
    <Fragment>
      <section class="timer-container">
        <section class="timer">
          <div class="clock">
            <div class="clock_container">
              <div class="clock_value">{timerDays}</div>
              <small class="clock_text">Days</small>
            </div>
            <span>:</span>
            <div class="clock_container">
              <div class="clock_value">{timerHours}</div>
              <small class="clock_text">Hours</small>
            </div>
            <span>:</span>
            <div class="clock_container">
              <div class="clock_value">{timerMinutes}</div>
              <small class="clock_text">Minutes</small>
            </div>
            <span>:</span>
            <div class="clock_container">
              <div class="clock_value">{timerSeconds}</div>
              <small class="clock_text">Seconds</small>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
}

Clock.defaultProps={
  timerDays: 0,
  timerHours:0,
  timerMinutes:0,
  timerSeconds:0,
}

export default Clock;
