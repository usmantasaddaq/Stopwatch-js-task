function timeToString(time) {
  const Time = {
    hrs: ("0" + Math.floor((time / 540000) % 60)).slice(-2),
    mins: ("0" + Math.floor((time / 60000) % 60)).slice(-2),
    sec: ("0" + Math.floor((time / 1000) % 100)).slice(-2),
    milis: ("0" + Math.floor((time / 100) % 100)).slice(-1),
    misc: ("0" + Math.floor((time / 10) % 100)).slice(-2),
  };
  return ` ${Time.hrs}:${Time.mins}:${Time.sec}.${Time.milis}${Time.misc} `;
}
function timeToString2(time) {
  const Time = {
    hrs: ("0" + Math.floor((time / 540000) % 60)).slice(-2),
    mins: ("0" + Math.floor((time / 60000) % 60)).slice(-2),
    sec: ("0" + Math.floor((time / 1000) % 100)).slice(-2),
    milis: ("0" + Math.floor((time / 100) % 100)).slice(-1),
    misc: ("0" + Math.floor((time / 10) % 100)).slice(-2),
  };
  return ` ${Time.hrs}:${Time.mins}:${Time.sec}.${Time.milis}<span class="time">${Time.misc}</span>`;
}




let num = 1;
let startTime;
let elapsedTime = 0;
let timerInterval;

function print(txt){
  document.getElementById("display").innerHTML=txt
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
   print(timeToString2(elapsedTime));
   document.getElementById("display1").innerHTML=timeToString(elapsedTime)

  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00.000");
  elapsedTime = 0;
  showButton("PLAY");
}

// Create function to display buttons

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}

//disable button

// Create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
//startHandler function  disable reset button and enable split button
function startHandler() {

  let resetBtn = document.querySelector("#resetButton");
  resetBtn.disabled = true;
  let splitbtn = document.querySelector("#splitButton");
  splitbtn.disabled = false;
}
//handerSplit function  show logdata on onclick split
function handerSplit() {
  let splitButton = document.getElementById("splitButton").innerHTML;
  let div = document.getElementById("div");
  div.append("#" + num + timeToString(elapsedTime) + splitButton);
  div.innerHTML = div.innerHTML + "<br>";
  num++;
}

//pausehandler function  show logdata and  disable split button enable reset button
function pauseHandler() {
  let pauseButton = document.getElementById("pauseButton").innerHTML;
  let div = document.getElementById("div");
  div.append("#" + num + timeToString(elapsedTime) + pauseButton);
  div.innerHTML = div.innerHTML + "<br>";
  num++;

  let resetBtn = document.querySelector("#resetButton");
  resetBtn.disabled = false;
  let splitbtn = document.querySelector("#splitButton");
  splitbtn.disabled = true;
}
