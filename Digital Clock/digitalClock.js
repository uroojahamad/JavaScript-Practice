"use strict"
const timeField = document.querySelector("#displayTime");
const label = document.querySelector("#flexCheckDefault");

const isChecked = () => {
    if(label.checked === true){
        return true;
    }
}

let date;
let hours;
let minutes;
let seconds;

setInterval(() => {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    if(!isChecked()){
        hours = hours - 12;
    }
    timeField.textContent = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}, 1000);

document.querySelector("#timeUnit").textContent = hours < 12 ? "AM" : "PM";

const timerMinutes = document.querySelector("#timer-minutes");
const timerSeconds = document.querySelector("#timer-seconds");
let min = timerMinutes.innerText;
let sec = timerSeconds.innerText;

const startTimer = () => {
    sec--;
    if(sec < 0){
        sec = "59";
        min--;
        if(min < 0 ){
            min = "0";
        }
        timerMinutes.innerText = `${min < 10 ? `0${min}` : min}`;
    }
    timerSeconds.innerText = `${sec < 10 ? `0${sec}` : sec}`;
        
}
setInterval(startTimer, 1000);

