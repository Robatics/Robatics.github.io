//MAIN-SECTIONS
const landing=document.getElementById('landing');

const start=document.getElementById('startSection');

const loader = document.getElementsByClassName('appLoader')[0];

//NAVIGATIONS
const allnavs = document.getElementsByClassName('navSection');
const firstNav = document.getElementById('navigation_one');
const secondNav = document.getElementById('navigation_two');
const thirdNav = document.getElementById('navigation_three');
const fourthNav = document.getElementById('navigation_four');

const home = document.getElementById('home');

//MINOR-SECTIONS
const picksectionbox=document.getElementById('pickSectionBox');
const picksection=document.getElementById('pickSection');
const multiplayersection=document.getElementById('multi_player_section');


//COMPUTER DIGIT DIFFICULTY
const digitsComputer = document.getElementById('digitChoice_one');
const crackfourDigitComputer = document.getElementById('crackfourDigitComputer');
const crackSixDigitComputer = document.getElementById('crackSixDigitComputer');

//VERSUS DIGIT DIFFICULTY
const digitsVersus = document.getElementById('digitChoice_two');
const crackfourDigitVersus = document.getElementById('crackfourDigitVersus');
const crackSixDigitVersus = document.getElementById('crackSixDigitVersus');

//ONLINE DIGIT DIFFICULTY
const digitsOnline = document.getElementById('digitChoice_three');
const crackfourDigitOnline = document.getElementById('crackfourDigitOnline');
const crackSixDigitOnline = document.getElementById('crackSixDigitOnline');

//IN GAME
const startCrackingGame = document.getElementById('codeSection');


//INGAME SIDEBAR
const inGame_otherOptions = document.getElementById('otherOptions');
const inGame_hint = document.getElementById('hint');
const inGame_Trails_and_Stuff = document.getElementById('Trails_and_Stuff');


//INGAME ELEMENTS
const inGame_time = document.getElementById('time');
const inGame_all_message = document.getElementById('all_message');
const inGame_decode_input = document.getElementById('decode');
const inGame_bottom_message = document.getElementById('bottom_message');





function opn_main() {
	start.style.display = "block";
	landing.style.display = "none";
	firstNav.style.display = "block";
}


function play() {

	loader.style.display = "inline-block";

	setTimeout(() => {
  		loader.classList.add('fadeOut');
		}, 500);

	start.style.display = "none";
	picksectionbox.style.display = "block";

	secondNav.style.display = "block";
	firstNav.style.display = "none";
} 

function startgame(){
	startCrackingGame.style.display = "block";
	digitsComputer.style.display = "none";

}

function crackcomputer() {
	picksection.style.display = "none";
	digitsComputer.style.display = "block";

	thirdNav.style.display = "block";
	secondNav.style.display = "none";

	
}

function multiplayer() {
	picksection.style.display = "none";
	multiplayersection.style.display = "block";

	thirdNav.style.display = "block";
	secondNav.style.display = "none";
	
}

//Toggle full Messages
inGame_Trails_and_Stuff.addEventListener('click', () => {
	inGame_all_message.classList.toggle('hide');

});


function fst_Backbutton() {
	landing.style.display = "block";
	start.style.display = "none";
	firstNav.style.display = "none";
}

function scnd_Backbutton() {
	loader.style.display = "inline-block";
	start.style.display = "block";
	firstNav.style.display = "block";
	picksectionbox.style.display = "none";
	secondNav.style.display = "none";

}

function trd_Backbutton() {
	picksection.style.display = "flex";
	multiplayersection.style.display = "none";

	secondNav.style.display = "block";
	thirdNav.style.display = "none";
	digitsComputer.style.display = "none";
	startCrackingGame.style.display = "none";
	

}

function home_button() {
	start.style.display = "block";

	firstNav.style.display = "block";
	secondNav.style.display = "none";
	thirdNav.style.display = "none";

	picksectionbox.style.display = "none";
	multiplayersection.style.display = "none";
}
