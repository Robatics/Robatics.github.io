//COUNTDOWN METHOD 1
const time_display = document.getElementById('time-left-display');
const restart_button = document.getElementById('start-button');

const startingMinutes = 10;
let time = startingMinutes * 60;

function countDown(){
setInterval(updateCountdown,1000);
}

function updateCountdown(){
	const minutes = Math.floor(time/60);
	let seconds = time % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	time_display.innerHTML = `${minutes}:${seconds}`;
	
	time--;
}

restart_button.onclick = function(){
	countDown();
}
//=============================///

//COUNTDOWN METHOD 2

document.addEventListener('DOMContentLoaded',() => {
const time_display = document.getElementById('time-left-display');
const restart_button = document.getElementById('start-button');
var timeLeft = 10;

function countDown(){
	setInterval(function(){
		if(timeLeft <= 0){
			clearInterval(timeLeft = 0);
		}
		time_display.innerHTML = timeLeft;
		timeLeft -=1;
	}, 2000);
}

restart_button.onclick = function(){
	countDown();
}

});

///==========================////

//COUNTDOWN METHOD 3

const timeDisplay = document.querySelector(".time-display");

timeDisplay.innerHTML= setTimeout(Decrement,1000);

var timer;
var timeDisplay;
var game;

function init(){
	game = new Scene();
	timeDisplay = document.querySelector(".time-display");
	timer = new Timer;
	timer.reset();
	game.start();
}//end init

function update(){
	game.hide();
	currentTime = timer.getElaspedTime();
	timeDisplay.innerHTML = currentTime;
}//end update

function reset(){
	timer.reset();
}//end reset


}
var currentTime = new Date();
function updateTimer(){
	if (new Date - initialTime > (1000 * 1000 * 60 * 3)){
		timeDisplay.innerHTML = formatTime();
		setTimeout(updateTimer,1000);
	}
}
