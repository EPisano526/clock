// script.js for digital clock
function digital() {
    const shown = document.querySelector('.clock')
    const time = new Date()
    hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
    let period = "AM"
    // for when the hour is 12
    if (hour === 0) {
        hour = 12
    }
    // for when the hour is in the PM 
    if (hour > 12) {
        hour = hour - 12
        period = "PM"
    }
    // adding the number 0 for padding
    hour = (hour < 10) ? "0" + hour : hour
    minute = (minute < 10) ? "0" + minute : minute
    second = (second < 10) ? "0" + second : second
    // printing out the digital clock structure
    shown.innerText = `${hour}:${minute}:${second} ${period}`
}
// renewing the clock ever 1000 miliseconds/ 1 second
const clock = setInterval(digital, 1000)
let hour
// orange button for text
const orange = document.querySelector('#orange')
orange.addEventListener("click", function () {
    clockDisplay.style.color = "orange";
})
// blue button for text
const blue = document.querySelector('#blue')
blue.addEventListener("click", function () {
    clockDisplay.style.color = "blue";
})
// green button for text
const green = document.querySelector('#green')
green.addEventListener("click", function () {
    clockDisplay.style.color = "green";
})
// changing the background color to lightgray
const lightgray = document.querySelector('#lightgray')
lightgray.addEventListener("click", function () {
    clockDisplay.style.background = "lightgray";
})
// changing the background color to black
const black = document.querySelector('#black')
black.addEventListener("click", function () {
    clockDisplay.style.background = "black";
})
// changing the background color to white
const white = document.querySelector('#white')
white.addEventListener("click", function () {
    clockDisplay.style.background = "white";
})