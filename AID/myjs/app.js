//MAJOR DIVS
const landingPage = document.getElementById('landingPage');
const homePage = document.getElementById('startSection');
const picksectionbox = document.getElementById('pickSectionBox');
const multiplayersection = document.getElementById('multi_player_section');

//NAVIGATIONS
const allnavs = document.querySelector('.navigations');
const firstNav = document.getElementById('navigation_one');
const secondNav = document.getElementById('navigation_two');
const thirdNav = document.getElementById('navigation_three');
const fourthNav = document.getElementById('navigation_four');

const nav_one = document.getElementById('nav_one');
const nav_two = document.getElementById('nav_two');
const nav_three = document.getElementById('nav_three');
const nav_four = document.getElementById('nav_four');


//NAVIGATION BUTTONS
const homeBtn = document.getElementById('homeBtn');

const navOneBtn = document.getElementById('navOneBtn');
const navTwoBtn = document.getElementById('navTwoBtn');
const navThreeBtn = document.getElementById('navThreeBtn');
const navFourBtn = document.getElementById('navFourBtn');


//BUTTONS
const landingButton = document.getElementById('landing');

const playGameButton = document.getElementById('playGame');

const crackComputerButton = document.getElementById('crackComputer');
const multiPlayerButton = document.getElementById('multiPlayer');

const playVersusButton = document.getElementById('playVersus');
const playOnlineButton = document.getElementById('playOnline');

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


landingButton.addEventListener('click', () => {
	landingPage.style.display= "none";
	homePage.style.opacity = "1";
	homePage.style.zIndex = "40";
});

//Play Button
playGameButton.addEventListener('click', () => {
	homePage.style.opacity = "0";
	homePage.style.zIndex = "-40";

	firstNav.style.opacity = "1";
	firstNav.style.zIndex = "40";
	picksectionbox.style.opacity = "1";
	picksectionbox.style.zIndex = "40";
	// homePage.style.display = "none";
});

//crackComputer Button
crackComputerButton.addEventListener('click', () => {
	firstNav.style.opacity = "0";
	firstNav.style.zIndex = "-40";
	picksectionbox.style.opacity = "0";
	picksectionbox.style.zIndex = "-40";

	secondNav.style.opacity = "1";
	secondNav.style.zIndex = "40";
	digitsComputer.style.opacity = "1";
	digitsComputer.style.zIndex = "40";
});

//multiPlayer Button
multiPlayerButton.addEventListener('click', () => {
	firstNav.style.opacity = "0";
	firstNav.style.zIndex = "-40";
	picksectionbox.style.opacity = "0";
	picksectionbox.style.zIndex = "-40";

	secondNav.style.opacity = "1";
	secondNav.style.zIndex = "40";
	multiplayersection.style.opacity = "1";
	multiplayersection.style.zIndex = "40";
});

//playVersus Button
// playVersusButton.addEventListener('click', () => {
// 	secondNav.style.opacity = "0";
// 	secondNav.style.zIndex = "-40";
// 	multiplayersection.style.opacity = "0";
// 	multiplayersection.style.zIndex = "-40";

// 	thirdNav.style.opacity = "1";
// 	thirdNav.style.zIndex = "40";
// 	digitsVersus.style.opacity = "1";
// 	digitsVersus.style.zIndex = "40";
// });

// //playOnline Button
// playOnlineButton.addEventListener('click', () => {
// 	secondNav.style.opacity = "0";
// 	secondNav.style.zIndex = "-40";
// 	multiplayersection.style.opacity = "0";
// 	multiplayersection.style.zIndex = "-40";

// 	thirdNav.style.opacity = "1";
// 	thirdNav.style.zIndex = "40";
// 	digitsOnline.style.opacity = "1";
// 	digitsOnline.style.zIndex = "40"; 
// });

//Navigation Control
navOneBtn.addEventListener('click', () => {
	firstNav.style.opacity = "0";
	firstNav.style.zIndex = "-40";
	picksectionbox.style.opacity = "0";
	picksectionbox.style.zIndex = "-40";

	homePage.style.opacity = "1";
	homePage.style.zIndex = "40";
	console.log('clicked');
});

navTwoBtn.addEventListener('click', () => {
	loader.style.display = "inline-block";
	start.style.display = "block";
	firstNav.style.display = "block";
	picksectionbox.style.display = "none";
	secondNav.style.display = "none";
});

navThreeBtn.addEventListener('click', () => {
	picksection.style.display = "flex";
	multiplayersection.style.display = "none";

	secondNav.style.display = "block";
	thirdNav.style.display = "none";
	digitsComputer.style.display = "none";
	startCrackingGame.style.display = "none";
});

homeBtn.addEventListener('click', () => {
	start.style.display = "block";

	firstNav.style.display = "block";
	secondNav.style.display = "none";
	thirdNav.style.display = "none";

	picksectionbox.style.display = "none";
	multiplayersection.style.display = "none";
});

function stuffLoaded() {
	// landingPage.style.display= "none";
	// allnavs.style.opacity = "0";
	// allnavs.style.zIndex = "-40";
	homePage.style.opacity = "0";
	homePage.style.zIndex = "-40";
	picksectionbox.style.opacity = "0";
	picksectionbox.style.zIndex = "-40";
	multiplayersection.style.opacity = "0";
	multiplayersection.style.zIndex = "-40";
	digitsVersus.style.display = "none";
	digitsOnline.style.display = "none";
	firstNav.style.opacity = "0";
	secondNav.style.opacity = "0";
	thirdNav.style.opacity = "0";
	fourthNav.style.opacity = "0";
// window.onload = usePcKeyboard.style.opacity = "0";
}