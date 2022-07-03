import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './style/app.css';
import { SearchIconWrapper, Search, StyledInputBase } from "./style/styleComponents";
import Clock from "./components/clock";
import Sale from "./components/sale";
import Footer from "./components/footer";

const App = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const startTimer = () => {
    let interval;
    interval = setInterval(() => {
      const countDownDate = new Date("June 27,2022 ").getTime();
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / 1000/ 60 / 60 / 24);
      const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
      console.log(setTimerHours)
    });
  };

  // useEffect(() => {
  //   startTimer();
  // });

  return (
    <div class="app">
      <div class="app_container">
        <div class="app_intro">
          <div class="app_intro-logo">
            <div class="app_intro-container">
              <div class="app_welcome">Welcome to Adima.</div>
              <div class="app_welcome-discription">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</div>
              <Clock
                timerDays = {timerDays}
                timerHours = {timerHours}
                timerMinutes={timerMinutes}
                timerSeconds={timerSeconds}
              />
              <div class="app_input-container">
                <Search style={{height: 50}}>
                  <SearchIconWrapper>
                    <SearchIcon style={{color: 'black'}}/>
                  </SearchIconWrapper>
                  <StyledInputBase
                    style={{marginTop: 5}}
                    placeholder="Twój adres e-mail"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Button style={{height: 50}}variant="contained">Contained</Button>
              </div>
              <div class="app_container-discription-text">
                <div class="app_discription-text">It is a long established fact that a reader will be 
                distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sale container */}
      <Sale />
      <Footer />
    </div>
  );
}

export default App;
