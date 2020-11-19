
//=====DOM FECTH=====//


//INGAME AUDIO ELEMENTS
const allBtns = document.getElementsByTagName('button');

const buttonSound = document.getElementById('buttonSound');
const buttonSoundSource = document.getElementById('buttonSoundSource');

const clickSound = document.getElementById('clickSound');
const clickSoundSource = document.getElementById('clickSoundSource');

const gameMainSound = document.getElementById('gameMainSound');
const gameMainSoundSource = document.getElementById('gameMainSoundSource');

const musicSwitchOn = document.getElementById('musicSwitchOn');
const musicSwitchOff = document.getElementById('musicSwitchOff');

const onMusicSwitch = document.getElementById('on');
const offMusicSwitch = document.getElementById('off');

const onIt = document.querySelector('.onIt');
const offIt = document.querySelector('.offIt');


//INGAME MAIN
const enterCode = document.getElementById('enterCode');

const enterCodeBtn = document.getElementById('enterCodeBtn');

const decode = document.getElementById('decode');

const decodeTwo = document.getElementById('decodeTwo');

const most_recent_trial_message = document.getElementById('most_recent_trial_message');

const trialCode = document.getElementById('single_message');

const newtrial_message = document.getElementById('trial_message');

const newtrial_code = document.getElementById('trial_code');

const trial_lists = document.getElementById('trial_lists');

const mobileKeysDiv = document.getElementById("mobileKeys");

const enterCodeForMobile = document.querySelector(".enterCode");

const usePcKeyboard = document.getElementById("usePcKeyboard");


//GAME MAJOR DIVS
const startCrackingGame = document.getElementById('codeSection');
const startSectionDiv = document.getElementById('startSection');
const crakingSectionDiv = document.getElementById('crakingSection');
const Game_OverDiv = document.getElementById('Game_OverDiv');


//WELCOME SCREEN
const playGame = document.getElementById('playGame');
const bottom = document.getElementById('bottom');
const bottomButtons = document.getElementsByTagName('button');

const homeSettings = document.getElementById('homeSettings');
const homeSettingsBackButton = document.getElementById('homeSettingsBackButton');
const backToGameHowHome = document.getElementById('backToGameHowHome');
const backToGameAboutHome = document.getElementById('backToGameAboutHome');
const howHome = document.getElementById('howHome');
const aboutHome = document.getElementById('aboutHome');

//INGAME SIDEBAR

const inGame_icons = document.getElementById('icons');

const inGame_otherOptions = document.getElementById('otherOptions');
const inGame_otherOptionsViewOptions = document.getElementById('viewOptions');
const inGame_otherOptionsUl = document.getElementById('options');

const inGame_otherOptionsHowDiv = document.getElementById('HowDiv');
const inGame_otherOptionsAboutDiv = document.getElementById('AboutDiv');
const inGame_otherOptionsbackToGameHow = document.getElementById('backToGameHow');
const inGame_otherOptionsbackToGameAbout = document.getElementById('backToGameAbout');


const inGame_otherOptionsNewgame = document.getElementById('newgame');
const inGame_otherOptionsHow = document.getElementById('how');
const inGame_otherOptionsSetings = document.getElementById('setings');
const inGame_otherOptionsToEmoji = document.getElementById('toEmoji');
const inGame_otherOptionsAbout = document.getElementById('about');


const inGame_hint = document.getElementById('hint');
const inGame_hint_h5 = document.getElementById('hint_h5');

const inGame_partialFix = document.getElementById('partialfix');
const inGame_partialfix_h5_1 = document.getElementById('partialfix_h5_1');
const inGame_partialfix_h5_2 = document.getElementById('partialfix_h5_2');

const inGame_Trails_and_Stuff = document.getElementById('Trails_and_Stuff');


//INGAME ELEMENTS
const inGame_time = document.getElementById('time');
const inGame_movesCount = document.getElementById('movesCount');
const inGame_form = document.getElementById('enterForm');
const inGame_all_message = document.getElementById('all_message');
const inGame_decode_input = document.getElementById('decode');
const inGame_bottom_message = document.getElementById('bottom_message');

//TRY AGAINS
const keepPlayingButton = document.querySelector('.keep-playing-button');
const retryButton = document.querySelector('.retry-button');

//GAME OVER TIMES
const finishedTime = document.querySelector('.score-container');
const bestTime = document.querySelector('.best-container');
const timeUp = document.querySelector('.time_up');

//TIME COUNTDOWN
const time_display = document.getElementById('time-left-display');
const restart_button = document.getElementById('start-button');

//=====END OF DOM FECTH=====//

///==============================///

//=====VARIABLES DECLARATION=====//

let theCode;
const right_arrow ='<i class="fa fa-arrow-right"></i>';
let w;
let x;
let y;
let z;

let f;
let g;
let h;
let i;

let j;


//=====END OF VARIABLES DECLARATION=====//

///==============================///

//=====TOGGLERS FUNCTIONALITY=====//
//Style Toggler
function toggleStyle(el, prop, style1, style2) {
	el.style[prop] = el.style[prop] === style1 ? style2 : style1;
  }

//InnerHTML Toggler
function toggleInnerHtml(el, inner1, inner2) {
	el.innerHTML = el.innerHTML === inner1 ? inner2 : inner1;
  }

//Value Toggler
function toggleValue(el, inner1, inner2) {
	el.value = el.value === inner1 ? inner2 : inner1;
  }

// function toggleClassname(el, class1, class2) {
// 	el.className = el.className === class1 ? class2 : class1;
//   }

//=====END OF TOGGLERS FUNCTIONALITY=====//

///==============================///

//=====GAMEOVER CONDITIONS FUNCTIONALITY=====//
function gameOverCond(btnmessage,message) {
	// time_display.style.display= "none";
	crakingSectionDiv.style.opacity='0.4';
	usePcKeyboard.style.opacity='0.4';
	enterCode.style.display= "none";
	enterCodeBtn.style.display= "none";
	Game_OverDiv.style.opacity='1';
	Game_OverDiv.style.zIndex ='40';
	inGame_icons.style.opacity = '0';
	inGame_otherOptionsViewOptions.style.opacity = '0';
	keepPlayingButton.style.display = "none";
	retryButton.style.marginLeft = "35%";
	retryButton.innerHTML = btnmessage;
	timeUp.innerHTML = message + "<br><span style='font-size:20px'>Secret Code " + right_arrow + " " + theCode + "</span>";
	finishedTime.innerHTML = time_display.innerHTML;
	bestTime.innerHTML = time_display.innerHTML;
	pauser();
	gameMainSound.pause();
}

var cnt=0;
var movedrop = 8;

var oog = 0;

function OutOfMoves() {
	
	cnt = parseInt(cnt)+parseInt(1);
	inGame_movesCount.innerHTML = movedrop - cnt;
	if (cnt >= movedrop) {
		gameOverCond("Try Again","Out Of Moves");
		gameOverSong();
	}
}

function OutOfGrace() {
	
	oog = parseInt(oog)+parseInt(1);
	if (oog >= 2) {
		timeUp.innerHTML = "Times Up" + "<br><span style='font-size:20px'>Secret Code " + right_arrow + " " + theCode + "</span>";
	}
	else{
		timeUp.innerHTML = "Times Up";
	}
}
//=====GAMEOVER CONDITIONS FUNCTIONALITY=====//

///==============================///

//=====TIMING=====//
//Count Down

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;

    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
		}
		
		
		if(seconds <= 0 && minutes <= 0){
		
			crakingSectionDiv.style.opacity='0.4';
			usePcKeyboard.style.opacity='0.4';
			Game_OverDiv.style.opacity='1';
			Game_OverDiv.style.zIndex ='40';
			inGame_icons.style.opacity = '0';
			inGame_otherOptionsViewOptions.style.opacity = '0';
			finishedTime.innerHTML = time_display.innerHTML;
			bestTime.innerHTML = time_display.innerHTML;
			pauser();
			gameOverSong();

			OutOfGrace();


		}

		//CONDITION TO HIDE HINTS BUTTONS
		if(seconds <= 30 && minutes <= 0){
			inGame_hint.style.opacity = "0.3";
			inGame_hint.disabled = true;
		}
		else if(seconds <= 20 && minutes <= 0){
			inGame_partialFix.style.opacity = "0.3";
			inGame_partialFix.disabled = true;
		}

		let innerfromstringtoint = parseInt(inGame_movesCount.innerHTML);

		//HINT 1(Get One Dead Number)
		inGame_hint.addEventListener('click', () => {
			
			if((seconds >= 31) &&(minutes <= 0) && (innerfromstringtoint >= 5)){
				movedrop = 4;
				inGame_movesCount.innerHTML = movedrop ;
				time = 0.25; 
				pauser();
				startJSfunc();
				onehintfunc();

			}
			else if ( (seconds >= 31) &&(minutes <= 0) && (innerfromstringtoint <= 4)) {
				time = 0.2; 
				pauser();
				startJSfunc();
				onehintfunc();

			}
			inGame_hint.style.opacity = "0.3";
			inGame_hint.disabled = true;
			inGame_hint_h5.style.display = "none";
			inGame_partialFix.style.opacity = "0.3";
			inGame_partialFix.disabled = true;
		});


		//HINT 2(Get One Dead Number and One Injured Number)
		inGame_partialFix.addEventListener('click', () => {

			if ( (seconds >= 21) &&(minutes <= 0) && (innerfromstringtoint >= 5)) {
				movedrop = 4;
				inGame_movesCount.innerHTML = movedrop ;
				time = 0.2; 
				pauser();
				startJSfunc();
				twohintfunc();
				
			} 
			else if ( (seconds >= 21) &&(minutes <= 0) && (innerfromstringtoint <= 4)) {
				time = 0.135; 
				pauser();
				startJSfunc();
				twohintfunc();
			}
			
				inGame_partialFix.style.opacity = "0.3";
			inGame_partialFix.disabled = true;
			inGame_partialfix_h5_1 .style.display = "none";
			inGame_hint.style.opacity = "0.3";
			inGame_hint.disabled = true;
			

			});
		
		
		//ONE HINT DISPLAY FUNCTION
		function onehintfunc() {
			let hintRandDisplayNumber = generateRandomNumber(1, 4);
			let hintCodeDisplay;
			let hintMessageDisplay;

            if (hintRandDisplayNumber == 1) {
				hintCodeDisplay = theCode[0] + " * " + " * " + "* " ;
				hintMessageDisplay = theCode[0] + " is " + hintGrandResult[2];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			 else if (hintRandDisplayNumber == 2) {
				hintCodeDisplay = " * " + theCode[1] + " * " + " * " ;
				hintMessageDisplay = theCode[1] + " is " + hintGrandResult[2];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			 else if (hintRandDisplayNumber == 3) {
				hintCodeDisplay = " * " + " * " + theCode[2]  + " * " ;
				hintMessageDisplay = theCode[2] + " is " + hintGrandResult[2];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			}
			 else if (hintRandDisplayNumber == 4) {
				hintCodeDisplay = " * " + " * " + "* " + theCode[3];
				hintMessageDisplay = theCode[3] + " is " + hintGrandResult[2];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			
			enterCode.value= hintCodeDisplay;
			enterCodeBtn.innerHTML= hintCodeDisplay;
			trialCode.innerHTML = hintCodeDisplay;
			most_recent_trial_message.innerHTML = hintMessageDisplay;
			enterCodeBtn.innerHTML="";
			enterCode.value="";
		}

		//=====END OF ONE HINT DISPLAY FUNCTION=====//

		//=================================================//

		//TWO HINT DISPLAY FUNCTION
		function twohintfunc() {
			let hintRandDisplayNumber = generateRandomNumber(1, 24);
			let hintCodeDisplay;
			let hintMessageDisplay;

			enterCode.value= hintCodeDisplay;
			enterCodeBtn.innerHTML= hintCodeDisplay;
			trialCode.innerHTML = hintCodeDisplay;
			most_recent_trial_message.innerHTML = hintMessageDisplay;

			//FIRST DEAD OTHERS INJURED
			if (hintRandDisplayNumber == 1) {
				hintCodeDisplay = theCode[0] + " * " + theCode[1] + "* " ;
				hintMessageDisplay = " " + theCode[0] + " is " + hintGrandResult[2] + "and " +  theCode[1] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 2) {
				hintCodeDisplay = theCode[0] + " * " + "* " + theCode[1] ;
				hintMessageDisplay = " " + theCode[0] + " is " + hintGrandResult[2] + " and " +  theCode[1] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 3) {
				hintCodeDisplay = theCode[0] + theCode[2] + " * " + "* " ;
				hintMessageDisplay = " " + theCode[0] + " is " + hintGrandResult[2] + " and " +  theCode[2] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			}
			else if (hintRandDisplayNumber == 4) {
				hintCodeDisplay = theCode[0] + " * "  + "* " + theCode[2] ;
				hintMessageDisplay = " " + theCode[0] + " is " + hintGrandResult[2] + " and " +  theCode[2] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 

			else if (hintRandDisplayNumber == 5) {
				hintCodeDisplay = theCode[0] + theCode[3] + " * " + "* " ;
				hintMessageDisplay = " " + theCode[0] + " is " + hintGrandResult[2] + " and " +  theCode[3] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			}
			else if (hintRandDisplayNumber == 6) {
				hintCodeDisplay = theCode[0] + " * "  + theCode[3] + "* " ;
				hintMessageDisplay = " " + theCode[0] + " is " + hintGrandResult[2] + " and " +  theCode[3] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
 

			//SECOND DEAD OTHERS INJURED
			else if (hintRandDisplayNumber == 7) {
				hintCodeDisplay ="* " + theCode[1] + theCode[0] + " * ";
				hintMessageDisplay = " " + theCode[1] + " is " + hintGrandResult[2] + " and " +  theCode[0] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 8) {
				hintCodeDisplay ="* " + theCode[1] + " * " + theCode[0] ;
				hintMessageDisplay = " " + theCode[1] + " is " + hintGrandResult[2] + " and " +  theCode[0] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 9) {
				hintCodeDisplay =theCode[2] + theCode[1] + " * "  + "* " ;
				hintMessageDisplay = " " + theCode[1] + " is " + hintGrandResult[2] + " and " +  theCode[2] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 10) {
				hintCodeDisplay ="* " + theCode[1] + " * " + theCode[2] ;
				hintMessageDisplay = " " + theCode[1] + " is " + hintGrandResult[2] + " and " +  theCode[2] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 9) {
				hintCodeDisplay =theCode[3] + theCode[1] + " * "  + "* " ;
				hintMessageDisplay = " " + theCode[1] + " is " + hintGrandResult[2] + " and " +  theCode[3] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 12) {
				hintCodeDisplay ="* " + theCode[1] + theCode[3] + " * "  ;
				hintMessageDisplay = " " + theCode[1] + " is " + hintGrandResult[2] + " and " +  theCode[3] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 


			//THIRD DEAD OTHERS INJURED
			else if (hintRandDisplayNumber == 13) {
				hintCodeDisplay="* " + theCode[0] + theCode[2] + " * ";
				hintMessageDisplay = " " + theCode[2] + " is " + hintGrandResult[2] + " and " +  theCode[0] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 14) {
				hintCodeDisplay="* " + " * " + theCode[2] + theCode[0];
				hintMessageDisplay = " " + theCode[2] + " is " + hintGrandResult[2] + " and " +  theCode[0] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			if (hintRandDisplayNumber == 15) {
				hintCodeDisplay=theCode[1] + "* " + theCode[2] + " * ";
				hintMessageDisplay = " " + theCode[2] + " is " + hintGrandResult[2] + " and " +  theCode[1] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 16) {
				hintCodeDisplay="* " + " * " + theCode[2] + theCode[1];
				hintMessageDisplay = " " + theCode[2] + " is " + hintGrandResult[2] + " and " +  theCode[1] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 17) {
				hintCodeDisplay=theCode[3] + " * " + theCode[2] + " * ";
				hintMessageDisplay = " " + theCode[2] + " is " + hintGrandResult[2] + " and " +  theCode[3] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 18) {
				hintCodeDisplay="* " + theCode[3] + theCode[2] + " * ";
				hintMessageDisplay = " " + theCode[2] + " is " + hintGrandResult[2] + " and " +  theCode[3] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 


			//FOURTH DEAD OTHERS INJURED
			else if (hintRandDisplayNumber == 19) {
				hintCodeDisplay ="* " + theCode[0] + " * " + theCode[3] ;
				hintMessageDisplay = " " + theCode[3] + " is " + hintGrandResult[2] + " and " +  theCode[0] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 20) {
				hintCodeDisplay ="* " + " * " + theCode[0] + theCode[3] ;
				hintMessageDisplay = " " + theCode[3] + " is " + hintGrandResult[2] + " and " +  theCode[0] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 21) {
				hintCodeDisplay =theCode[1] + " * " + " * " + theCode[3] ;
				hintMessageDisplay = " " + theCode[3] + " is " + hintGrandResult[2] + " and " +  theCode[1] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 22) {
				hintCodeDisplay ="* " + " * " + theCode[1] + theCode[3] ;
				hintMessageDisplay = " " + theCode[3] + " is " + hintGrandResult[2] + " and " +  theCode[1] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 23) {
				hintCodeDisplay =theCode[2] + " * " + " * " + theCode[3] ;
				hintMessageDisplay = " " + theCode[3] + " is " + hintGrandResult[2] + " and " +  theCode[2] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			else if (hintRandDisplayNumber == 24) {
				hintCodeDisplay ="* " + theCode[2] + " * " + theCode[3] ;
				hintMessageDisplay = " " + theCode[3] + " is " + hintGrandResult[2] + " and " +  theCode[2] + " is " + hintGrandResult[1];
				enterCodeBtn.innerHTML="";
				enterCode.value="";
			} 
			
			enterCode.value= hintCodeDisplay;
			enterCodeBtn.innerHTML= hintCodeDisplay;
			trialCode.innerHTML = hintCodeDisplay;
			most_recent_trial_message.innerHTML = hintMessageDisplay;
			enterCodeBtn.innerHTML="";
			enterCode.value="";

		}

		//=====END OF TWO HINT DISPLAY FUNCTION=====//


    };

    // don't want to wait a full second before the timer starts
    timer();
    window.myTimer = setInterval(timer, 1000);


}

function pauser() {
    if(window.myTimer) {
        clearInterval(window.myTimer);
        window.myTimer = null;
    }
}


let time = 1; 

function startJSfunc() {
    var fiveMinutes = 60 * time,
    display = document.querySelector('#time');
	startTimer(fiveMinutes, time_display);

};


//Keep Playing Button
keepPlayingButton.addEventListener('click', () => {
	time = 0.10;
	startJSfunc();
	
	Game_OverDiv.style.opacity='0';
	Game_OverDiv.style.zIndex ='-5';
	crakingSectionDiv.style.opacity='1';
	inGame_icons.style.opacity = '1';
	

	var cnt=0;
	function CountFun() {
	cnt = parseInt(cnt)+parseInt(1);
	console.log(cnt);
	if (cnt >= 1) {
		keepPlayingButton.style.display = "none";
		retryButton.style.marginLeft = "30%";	
	};
}

CountFun();

});


//Play Button
playGame.addEventListener('click', () => {
	startSectionDiv.style.display= "none";
	crakingSectionDiv.style.opacity = "1";
	
	inGame_icons.style.opacity = "1";
	usePcKeyboard.style.opacity = "1";
	startJSfunc(); 
	
});


homeSettings.addEventListener('click', () => {

	startSectionDiv.style.opacity = '0';
	startSectionDiv.style.zIndex = '-60';

	inGame_otherOptionsViewOptions.style.opacity = '1';
	inGame_otherOptionsViewOptions.style.zIndex = '60';
	howHome.style.display = "block";
	aboutHome.style.display = "block";
	backToGameHowHome.style.display = "block";
	backToGameAboutHome.style.display = "block";
	inGame_otherOptionsHow.style.display = "none";
	inGame_otherOptionsAbout.style.display = "none";
	inGame_otherOptionsbackToGameHow.style.display = "none";
	inGame_otherOptionsbackToGameAbout.style.display = "none";
	homeSettingsBackButton.style.opacity = '1';
	homeSettingsBackButton.style.zIndex = '60';
});



//Back to Game Button From Home Settings
homeSettingsBackButton.addEventListener('click', () => {

	inGame_otherOptionsViewOptions.style.opacity = '0';
	inGame_otherOptionsViewOptions.style.zIndex = '-40';

	usePcKeyboard.style.opacity = '0';
	crakingSectionDiv.style.opacity = '0';
	usePcKeyboard.style.zIndex = '-600';
	crakingSectionDiv.style.zIndex = '-600';

	startSectionDiv.style.opacity = '1';
	startSectionDiv.style.zIndex = '400';
	startSectionDiv.style.display = "block";

});

howHome.addEventListener('click', () => {

	startSectionDiv.style.opacity = '0';
	startSectionDiv.style.zIndex = '-400';
	startSectionDiv.style.display = "none";
	usePcKeyboard.style.opacity = '0';
	crakingSectionDiv.style.opacity = '0';
	inGame_otherOptionsViewOptions.style.opacity = '0';
	inGame_otherOptionsViewOptions.style.zIndex = '-40';
	inGame_icons.style.opacity = '0';
	inGame_icons.style.zIndex = '-40';
	inGame_otherOptionsHowDiv.style.opacity='1';
	inGame_otherOptionsHowDiv.style.zIndex = '40';

});

aboutHome.addEventListener('click', () => {
	startSectionDiv.style.opacity = '0';
	startSectionDiv.style.zIndex = '-400';
	startSectionDiv.style.display = "none";
	usePcKeyboard.style.opacity = '0';
	crakingSectionDiv.style.opacity = '0';
	inGame_otherOptionsViewOptions.style.opacity = '0';
	inGame_otherOptionsViewOptions.style.zIndex = '-40';
	inGame_icons.style.opacity = '0';
	inGame_icons.style.zIndex = '-40';

	inGame_otherOptionsAboutDiv.style.opacity='1';
	inGame_otherOptionsAboutDiv.style.zIndex = '40';
	
});


backToGameHowHome.addEventListener('click', () => {
	startSectionDiv.style.opacity = '0';
	startSectionDiv.style.zIndex = '-400';
	inGame_icons.style.opacity = '0';
	inGame_icons.style.zIndex = '-40';
	inGame_otherOptionsHowDiv.style.opacity='0';
	inGame_otherOptionsHowDiv.style.zIndex = '-40';

	inGame_otherOptionsViewOptions.style.opacity = '1';
	inGame_otherOptionsViewOptions.style.zIndex = '40';
	
});

backToGameAboutHome.addEventListener('click', () => {
	startSectionDiv.style.opacity = '0';
	startSectionDiv.style.zIndex = '-400';

	inGame_icons.style.opacity = '0';
	inGame_icons.style.zIndex = '-40';
	inGame_otherOptionsAboutDiv.style.opacity='0';
	inGame_otherOptionsAboutDiv.style.zIndex = '-40';

	inGame_otherOptionsViewOptions.style.opacity = '1';
	inGame_otherOptionsViewOptions.style.zIndex = '40';

});

//Try Again Buttons
retryButton.addEventListener('click', () => {
	location.reload();
});

restart_button.addEventListener('click', () => {
	location.reload();
});

inGame_otherOptionsNewgame.addEventListener('click', () => {
	location.reload();
});



//=====END OF TIMING=====//

///==============================///

//=====ICONS FUNCTIONALITY=====//

//Toggle Other Options
inGame_otherOptions.addEventListener('click', () => {

	toggleStyle(usePcKeyboard, 'opacity', '0.2', '1');
	toggleStyle(crakingSectionDiv, 'opacity', '0.2', '1');
	toggleStyle(inGame_otherOptionsViewOptions, 'opacity', '1', '0');
	toggleStyle(inGame_otherOptionsViewOptions, 'z-index', '40', '-40');

});

//Button To How to Play Page
inGame_otherOptionsHow.addEventListener('click', () => {

	usePcKeyboard.style.opacity = '0.2';
	crakingSectionDiv.style.opacity = '0.2';
	inGame_otherOptionsViewOptions.style.opacity = '0';
	inGame_otherOptionsViewOptions.style.zIndex = '-40';
	inGame_icons.style.opacity = '0';
	inGame_icons.style.zIndex = '-40';
	inGame_otherOptionsHowDiv.style.opacity='1';
	inGame_otherOptionsHowDiv.style.zIndex = '40';

});

//Back to Game Button From How to Play Page
inGame_otherOptionsbackToGameHow.addEventListener('click', () => {
	usePcKeyboard.style.opacity = '1';
	crakingSectionDiv.style.opacity = '1';
	inGame_otherOptionsViewOptions.style.opacity = '0';
	inGame_otherOptionsViewOptions.style.zIndex = '-40';
	inGame_icons.style.opacity = '1';
	inGame_icons.style.zIndex = '40';
	inGame_otherOptionsHowDiv.style.opacity='0';
	inGame_otherOptionsHowDiv.style.zIndex = '-40';

});

//Button to Show Settings

inGame_otherOptionsSetings.addEventListener('click', () => {
	toggleStyle(inGame_otherOptionsToEmoji, 'display', 'block', 'none');
	toggleStyle(onIt, 'display', 'none', 'block');
});

//Change GrandResult to Emoji or Words
function toggleGrand() {
	GrandResult = GrandResult === resultsForEmoji ? results :  resultsForEmoji;
}

//Change hintGrandResult to Emoji or Words
function toggleHintDisplay() {
	hintGrandResult = hintGrandResult === hintResultsForEmoji ? hintResults :  hintResultsForEmoji;
}

//Toggle InnerHTML Between Emojis and Words Usage 
inGame_otherOptionsToEmoji.addEventListener('click', e => {
	toggleGrand();
	toggleHintDisplay();
	toggleInnerHtml(inGame_otherOptionsToEmoji,'Use Emojis','Use Words');
  });

//Button To About Page
inGame_otherOptionsAbout.addEventListener('click', () => {
	usePcKeyboard.style.opacity = '0';
	crakingSectionDiv.style.opacity = '0';
	inGame_otherOptionsViewOptions.style.opacity = '0';
	inGame_otherOptionsViewOptions.style.zIndex = '-40';
	inGame_icons.style.opacity = '0';
	inGame_icons.style.zIndex = '-40';
	inGame_otherOptionsAboutDiv.style.opacity='1';
	inGame_otherOptionsAboutDiv.style.zIndex = '40';

});

//Back to Game Button From About Page
inGame_otherOptionsbackToGameAbout.addEventListener('click', () => {
	usePcKeyboard.style.opacity = '1';
	crakingSectionDiv.style.opacity = '1';
	inGame_otherOptionsViewOptions.style.opacity = '0';
	inGame_otherOptionsViewOptions.style.zIndex = '-40';
	inGame_icons.style.opacity = '1';
	inGame_icons.style.zIndex = '40';
	inGame_otherOptionsAboutDiv.style.opacity='0';
	inGame_otherOptionsAboutDiv.style.zIndex = '-40';

});

///==============================///

//Toggle Single Hint Message
inGame_hint.addEventListener('click', () => {
	toggleStyle(inGame_hint_h5, 'display', 'block', 'none');
});


//Toggle Double Hint Message
inGame_partialFix.addEventListener('click', () => {
	toggleStyle(inGame_partialfix_h5_1, 'display', 'block', 'none');
});


//Toggle full Messages
inGame_Trails_and_Stuff.addEventListener('click', () => {
	inGame_all_message.classList.toggle('hide');
	inGame_form.classList.toggle('spacer')
	inGame_hint_h5.style.display = "none";
	inGame_partialfix_h5_1.style.display = "none";

});

//=====END OF ICONS=====//

///==============================///


//=====Auto Focus On Input For PC=====//

function SetFocus() {
	enterCode.focus();	
}

//=====End Auto Focus On Input For PC=====//

///==============================///

//=====DEALING WITH SOUND=====//

let onSound = '<i class="fa fa-volume-up" id="on"></i>';
let offSound = '<i class="fa fa-volume-mute" id="off"></i>';

let amount;
let loo;

function codecrackedSong() {
	amount = 1;
	loo = setInterval(repit, 9000);

	function repit(){

		amount--;

		if (amount == 0) {
			clearInterval(loo);
		}

		clickSoundSource.src = "sounds/codecrackedb.wav";
		clickSound.load();
	}

	repit();
}

function clickit() {
	clickSoundSource.src = "sounds/click.wav";
	clickSound.load();
	clickSound.removeAttribute("loop");
}

function clearit() {
	clickSoundSource.src = "sounds/cancel.wav";
	clickSound.load();
	clickSound.removeAttribute("loop");
}

function gameOverSong() {
	clickSoundSource.src = "sounds/gameover.wav";
	clickSound.load();
}

function gameSong() {
	gameMainSoundSource.src = "sounds/gametune1.mp3";
	gameMainSound.load();
	gameMainSound.setAttribute('loop','');
}

musicSwitchOn.addEventListener('click', () => {
	musicSwitchOn.style.display = "none";
	musicSwitchOff.style.display = "block";
	buttonSound.removeAttribute("autoplay");
	clickSound.removeAttribute("autoplay");
	gameMainSound.pause();
	onIt.style.display = "none";
	offIt.style.display = "block";
});

musicSwitchOff.addEventListener('click', () => {
	musicSwitchOn.style.display = "block";
	musicSwitchOff.style.display = "none";
	buttonSound.setAttribute("autoplay","");
	clickSound.setAttribute("autoplay","");
	gameMainSound.play();
	onIt.style.display = "block";
	offIt.style.display = "none";
});

onIt.addEventListener('click', () => {
	onIt.style.display = "none";
	offIt.style.display = "block";
	musicSwitchOn.style.display = "none";
	musicSwitchOff.style.display = "block";
	buttonSound.removeAttribute("autoplay");
	clickSound.removeAttribute("autoplay");
	gameMainSound.pause();

});

offIt.addEventListener('click', () => {
	onIt.style.display = "block";
	offIt.style.display = "none";
	musicSwitchOn.style.display = "block";
	musicSwitchOff.style.display = "none";
	buttonSound.setAttribute("autoplay","");
	clickSound.setAttribute("autoplay","");
	gameMainSound.play();
});

let inGame_otherOptionsUlButtons = inGame_otherOptionsUl.getElementsByTagName('button');
let inGame_otherOptionsUlli = inGame_otherOptionsUl.getElementsByTagName('li');

for (i = 0; i < 10; i++) {
	allBtns[i].addEventListener('click', () => {
		clickit();
	});
}
	
for (i = 0; i < 3; i++) {
		inGame_otherOptionsUlButtons[i].addEventListener('click', () => {
			clickit();
		});
}

// for (i = 0; i < 8; i++) {
// 	inGame_otherOptionsUlli[i].addEventListener('click', () => {
// 		clickit();
// 	});
// }

//=====END OF DEALING WITH SOUND=====//

//=========================================//


//=====Start Mobile Keyboard=====//

//Insert Button Value
function input(e) {
	const delButton = document.getElementById("btnDel");
	enterCodeBtn.innerHTML = enterCodeBtn.innerHTML + e.value;
	buttonSoundSource.src = "sounds/" + e.getAttribute('data-sound');
	buttonSound.load();
	clickSound.removeAttribute("loop");
	
	if (enterCodeBtn.innerHTML.length >= 4) {
			for (i = 0; i < 10; i++) {
			var numbuttons = document.getElementById("btn" + i);
			numbuttons.disabled = true;
		}
	}	
	// console.log(enterCodeBtn.innerHTML.length);
}


//Delete Last Value
function del() {
	for (i = 0; i < 10; i++) {
		var numbuttons = document.getElementById("btn" + i);
		numbuttons.disabled = false;
	}
    enterCodeBtn.innerHTML = enterCodeBtn.innerHTML.substr(0, enterCodeBtn.innerHTML.length - 1);
}

//=====Mobile KeyBoard End=====//

///==============================///

//=====Random Numbers Generation=====//

function generateRandomNumber(min,max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


// returns a range of unique numbers, each between "min and max" with length of "rength"
function uniqueRangeGenerator(rength,min,max) {
    const range = []

    while (range.length < (rength)) {

        var randomNumber = generateRandomNumber(min, max)

        if (range.indexOf(randomNumber) === -1) {
            range.push(randomNumber)
        }
    }
    return range
}

const gen4 = uniqueRangeGenerator(4,0,9);

//=====End of Random Generation=====//

///==============================///

//=====Results Display=====//

let aliveWord = "alive";
let injuredWord = "injured";
let deadWord = "dead";


let alive = "&#128519;";
let injured = "&#129301;";
let dead = "&#128128;";

let thumbsup = "&#128077;";



oneDead= dead;
twoDead = dead.repeat(2);
threeDead = dead.repeat(3); 
allDead = dead.repeat(4);

oneInjured = injured; 
twoInjured = injured.repeat(2);
threeInjured = injured.repeat(3);
allInjured = injured.repeat(4);

oneAlive = alive;
twoAlive = alive.repeat(2);
threeAlive = alive.repeat(3);
allAlive = alive.repeat(4);

const threeIoneA = "3 injured,1 alive";
const threeIoneAForEmoji = threeInjured + oneAlive;

const twoItwoA = "2 injured,2 alive";
const twoItwoAForEmoji = twoInjured + twoAlive;

const oneIthreeA = "1 injured,3 alive";
const oneIthreeAForEmoji = oneInjured + threeAlive;

const allA = "ALL ALIVE";
const allAForEmoji = allAlive;

const allI = "ALL INJURED";
const allIForEmoji = allInjured;

const allD = "ALL DEAD, CODE CRACKED";
const allDForEmoji = allDead + thumbsup;

const threeDOneA = "3 dead,1 alive";
const threeDOneAForEmoji = threeDead + oneAlive;

const twoDoneIoneA = "2 dead,1 injured,1 alive";
const twoDoneIoneAForEmoji = twoDead + oneInjured + oneAlive;

const oneDtwoIoneA = "1 dead,2 injured,1 alive";
const oneDtwoIoneAForEmoji = oneDead + twoInjured + oneAlive;

const oneDoneItwoA = "1 dead,1 injured, 2 alive";
const oneDoneItwoAForEmoji = oneDead + oneInjured + twoAlive;

const twoDtwoA = "2 dead,2 alive";
const twoDtwoAForEmoji = twoDead + twoAlive;

const obeDthreeI = "1 dead 3 injured";
const obeDthreeIForEmoji = oneDead + threeInjured;

const oneDthreeA = "1 dead,3 alive";
const oneDthreeAForEmoji = oneDead + threeAlive;

const twoDtwoI = "2 dead,2 injured";
const twoDtwoIForEmoji = twoDead + twoInjured;

let results = [threeIoneA,twoItwoA,oneIthreeA,
				allA,allI,allD,
					threeDOneA,
						twoDoneIoneA,oneDtwoIoneA,oneDoneItwoA,
							twoDtwoA,obeDthreeI,oneDthreeA,twoDtwoI];

let resultsForEmoji = [threeIoneAForEmoji,twoItwoAForEmoji,oneIthreeAForEmoji,
	allAForEmoji,allIForEmoji,allDForEmoji,
		threeDOneAForEmoji,
			twoDoneIoneAForEmoji,oneDtwoIoneAForEmoji,oneDoneItwoAForEmoji,
				twoDtwoAForEmoji,obeDthreeIForEmoji,oneDthreeAForEmoji,twoDtwoIForEmoji];




let GrandResult = results;

let hintResults = [aliveWord,injuredWord,deadWord];
let hintResultsForEmoji = [alive,injured,dead];

let hintGrandResult = hintResults;

//=====End Of Results Display=====//

///==============================///

//Game Play Logic
function gameAction() {
	const newli = document.createElement("LI");
	const trialss = trialCode.innerHTML + " " + right_arrow + " " + most_recent_trial_message.innerHTML;
	
	let screen = enterCodeBtn.innerHTML.split("");

	w = screen[0];
	x = screen[1];
	y = screen[2];
	z = screen[3];

	f = String(gen4[0]);
	g = String(gen4[1]);
	h = String(gen4[2]);
	i = String(gen4[3]);


	j = [f,g,h,i];

	theCode = f + g + h + i;

	trialCode.innerHTML = enterCodeBtn.innerHTML;

	const WinJ = j.includes(w);
	const XinJ = j.includes(x);	
	const YinJ = j.includes(y);
	const ZinJ = j.includes(z);

	//~NUMBER REPITITION
	if(w==x ||  w==y || w==z || x==y || x==z || y==z){
		most_recent_trial_message.innerHTML = "Repetition!! Change number";
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	//~You Missed 4 Numbers
	else if(screen.length <= 0){
		most_recent_trial_message.innerHTML = "!! Enter 4 Numbers";
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	//~You Missed 3 Numbers
	else if(screen.length <= 1){
		most_recent_trial_message.innerHTML = "!! You Missed 3 Numbers";
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	//~NYou Missed 2 Numbers
	else if(screen.length <= 2){
			most_recent_trial_message.innerHTML = "!! You Missed 2 Numbers";
			enterCodeBtn.innerHTML="";
			enterCode.value="";
		}
	
	//~You Missed A Numbers
	else if(screen.length <= 3){
		most_recent_trial_message.innerHTML = "!! You Missed A Numbers";
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	//~3 injured,1 alive
	else if(WinJ && XinJ && YinJ && !ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[0];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && XinJ && ZinJ && !YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[0];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && YinJ && ZinJ && !XinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[0];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(XinJ && YinJ && ZinJ && !WinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[0];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	// ~2 injured,2 alive
	else if(!YinJ && !ZinJ && WinJ && XinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(!XinJ && !ZinJ && WinJ && YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(!XinJ && !YinJ && WinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(!WinJ && !ZinJ && XinJ && YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(!WinJ && !YinJ && XinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && YinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	//~1 injured,3 alive
	else if(!XinJ && !YinJ && !ZinJ && WinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[2];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(!WinJ && !YinJ && !ZinJ && XinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[2];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && !ZinJ && YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[2];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && !YinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[2];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}


	//~ALL ALIVE
	else if(!WinJ && !XinJ && !YinJ && !ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[3];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	//~ALL INJURED
	else if(WinJ && XinJ && YinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[4];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	//~ALL DEAD
	else if(w==f && x==g && y==h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[5];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	//~3 dead,1 alive
	else if(w==f && x==g && y==h && !ZinJ){
		most_recent_trial_message.innerHTML = GrandResult[6];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(w==f && x==g && z==i && !YinJ){
		most_recent_trial_message.innerHTML = GrandResult[6];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(w==f && y==h && z==i && XinJ){
		most_recent_trial_message.innerHTML = GrandResult[6];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(x==g && y==h && z==i && !WinJ){
		most_recent_trial_message.innerHTML = GrandResult[6];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}


	//~2 dead,1 injured,1 ALIVE
	else if(WinJ && !XinJ && w!=f && y==h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && !YinJ && w!=f && x==g && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && !ZinJ && w!=f && x==g && y==h){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	else if(XinJ && !WinJ && x!=g && y==h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(XinJ && !YinJ && x!=g && w==f && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(XinJ && !ZinJ && x!=g && w==f && y==h){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	else if(YinJ && !WinJ && y!=h && x==g && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(YinJ && !XinJ && y!=h && w==f && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(YinJ && !ZinJ && y!=h && w==f && x==g){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	else if(ZinJ && !WinJ && z!=i && x==g && y==h){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(ZinJ && !XinJ && z!=i && w==f && y==h){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(ZinJ && !YinJ && z!=i && w==f && x==g){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	//~1 dead,2 injured,1 ALIVE
	else if(XinJ && YinJ && !ZinJ && w==f && x!=g && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(XinJ && ZinJ && !YinJ && w==f && x!=g && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(YinJ && ZinJ && !XinJ && w==f && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	else if(WinJ && YinJ && !ZinJ && x==g && w!=f && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && ZinJ && !YinJ && x==g && w!=f && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(YinJ && ZinJ && !WinJ && x==g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	
	else if(WinJ && XinJ && !ZinJ && y==h && w!=f && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && ZinJ && !XinJ && y==h && w!=f && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(XinJ && ZinJ && !WinJ && y==h && x!=g && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	
	else if(WinJ && XinJ && !YinJ && z==i && w!=f && x!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && YinJ && !XinJ && z==i && w!=f && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(XinJ && YinJ && !WinJ && z==i && x!=g && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	

	//~1 dead,1 injured, 2 alive
	else if(WinJ && XinJ && !YinJ && !ZinJ && w==f && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && YinJ && !XinJ && !ZinJ && w==f && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && ZinJ && !XinJ && !YinJ && w==f && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	else if(XinJ && WinJ && !YinJ && !ZinJ && x==g && w!=f){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(XinJ && YinJ && !WinJ && !ZinJ && x==g && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(XinJ && ZinJ && !WinJ && !YinJ && x==g && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	else if(YinJ && WinJ && !XinJ && !ZinJ && y==h && w!=f){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(YinJ && XinJ && !WinJ && !ZinJ && y==h && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(YinJ && ZinJ && !WinJ && !XinJ && y==h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	else if(ZinJ && WinJ && !XinJ && !YinJ && z==i && w!=f){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(ZinJ && XinJ && !WinJ && !YinJ && z==i && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(ZinJ && YinJ && !WinJ && !XinJ && z==i && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}


	//~2 dead,2 alive
	else if(WinJ && XinJ && !YinJ && !ZinJ && w==f && x==g){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && YinJ && !XinJ && !ZinJ && w==f && y==h){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && ZinJ && !XinJ && !YinJ && w==f && z==i){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(XinJ && YinJ && !WinJ && !ZinJ && x==g && y==h){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(XinJ && ZinJ && !WinJ && !YinJ && x==g && z==i){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(YinJ && ZinJ && !WinJ && !XinJ && y==h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}


	//~1 dead 3 injured
	else if(XinJ && YinJ && ZinJ && x!=g && y!=h && z!=i && w==f){
		most_recent_trial_message.innerHTML = GrandResult[11];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && YinJ && ZinJ && w!=f && y!=h && z!=i && x==g){
		most_recent_trial_message.innerHTML = GrandResult[11];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && XinJ && ZinJ && w!=f && x!=g && z!=i && y==h){
		most_recent_trial_message.innerHTML = GrandResult[11];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(WinJ && XinJ && YinJ && w!=f && x!=g && y!=h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[11];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}


	//~1 dead,3 alive
	else if(!XinJ && !YinJ && !ZinJ && w==f){
		most_recent_trial_message.innerHTML = GrandResult[12];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(!WinJ && !YinJ && !ZinJ && x==g){
		most_recent_trial_message.innerHTML = GrandResult[12];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && !ZinJ && y==h){
		most_recent_trial_message.innerHTML = GrandResult[12];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && !YinJ && z==i){
		most_recent_trial_message.innerHTML = GrandResult[12];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}


	//~2 dead,2 injured
	else if(w==f && x==g && YinJ && ZinJ && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(w==f && y==h && XinJ && ZinJ && x!=g && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(w==f && z==i && XinJ && YinJ && x!=g && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(x==g && y==h && WinJ && ZinJ && w!=f && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(x==g && z==i && WinJ && YinJ && w!=f && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	else if(y==h && z==i && WinJ && XinJ && w!=f && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	//Append Trials
	newli.innerHTML= trialss;
	trial_lists.appendChild(newli);

	//Reactivate Mobile Keyboard
	for (i = 0; i < 10; i++) {
        var numbuttons = document.getElementById("btn" + i);
		numbuttons.disabled = false;
	}

	if (trialCode.innerHTML == theCode) {

		gameOverCond("Play Again","Code Cracked");
		codecrackedSong();
	}

	console.log(theCode);
}




//Game Play Logic
function gameActionPc() {
	SetFocus();
	const newli = document.createElement("LI");
	const trialss = trialCode.innerHTML + " " + most_recent_trial_message.innerHTML;
	
	w = enterCode.value[0];
	x = enterCode.value[1];
	y = enterCode.value[2];
	z = enterCode.value[3];

	f = String(gen4[0]);
	g = String(gen4[1]);
	h = String(gen4[2]);
	i = String(gen4[3]);


	j = [f,g,h,i];

	theCode = f + g + h + i;

	trialCode.innerHTML = enterCode.value;

	const WinJ = j.includes(w);
	const XinJ = j.includes(x);	
	const YinJ = j.includes(y);
	const ZinJ = j.includes(z);

	//~NUMBER REPITITION
	if(w==x ||  w==y || w==z || x==y || x==z || y==z){
		most_recent_trial_message.innerHTML = "Repetition!! Change number";
		enterCode.value="";
	}

	//~You Missed 4 Numbers
	else if(enterCode.value.length <= 0){
		most_recent_trial_message.innerHTML = "!! Enter 4 Numbers";
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	//~You Missed 3 Numbers
	else if(enterCode.value.length <= 1){
		most_recent_trial_message.innerHTML = "!! You Missed 3 Numbers";
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}

	//~NYou Missed 2 Numbers
	else if(enterCode.value.length <= 2){
			most_recent_trial_message.innerHTML = "!! You Missed 2 Numbers";
			enterCodeBtn.innerHTML="";
			enterCode.value="";
		}
	
	//~You Missed A Numbers
	else if(enterCode.value.length <= 3){
		most_recent_trial_message.innerHTML = "!! You Missed A Numbers";
		enterCodeBtn.innerHTML="";
		enterCode.value="";
	}
	//~3 injured,1 alive
	else if(WinJ && XinJ && YinJ && !ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[0];
		enterCode.value="";
	}
	else if(WinJ && XinJ && ZinJ && !YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[0];
		enterCode.value="";
	}
	else if(WinJ && YinJ && ZinJ && !XinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[0];
		enterCode.value="";
	}
	else if(XinJ && YinJ && ZinJ && !WinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[0];
		enterCode.value="";
	}

	// ~2 injured,2 alive
	else if(!YinJ && !ZinJ && WinJ && XinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCode.value="";
	}
	else if(!XinJ && !ZinJ && WinJ && YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCode.value="";
	}
	else if(!XinJ && !YinJ && WinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCode.value="";
	}
	else if(!WinJ && !ZinJ && XinJ && YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCode.value="";
	}
	else if(!WinJ && !YinJ && XinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && YinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCode.value="";
	}

	//~1 injured,3 alive
	else if(!XinJ && !YinJ && !ZinJ && WinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[2];
		enterCode.value="";
	}
	else if(!WinJ && !YinJ && !ZinJ && XinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[2];
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && !ZinJ && YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[2];
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && !YinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[2];
		enterCode.value="";
	}


	//~ALL ALIVE
	else if(!WinJ && !XinJ && !YinJ && !ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[3];
		enterCode.value="";
	}

	//~ALL INJURED
	else if(WinJ && XinJ && YinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[4];
		enterCode.value="";
	}

	//~ALL DEAD
	else if(w==f && x==g && y==h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[5];
		enterCode.value="";
	}

	//~3 dead,1 alive
	else if(w==f && x==g && y==h && !ZinJ){
		most_recent_trial_message.innerHTML = GrandResult[6];
		enterCode.value="";
	}
	else if(w==f && x==g && z==i && !YinJ){
		most_recent_trial_message.innerHTML = GrandResult[6];
		enterCode.value="";
	}
	else if(w==f && y==h && z==i && XinJ){
		most_recent_trial_message.innerHTML = GrandResult[6];
		enterCode.value="";
	}
	else if(x==g && y==h && z==i && !WinJ){
		most_recent_trial_message.innerHTML = GrandResult[6];
		enterCode.value="";
	}


	//~2 dead,1 injured,1 ALIVE
	else if(WinJ && !XinJ && w!=f && y==h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCode.value="";
	}
	else if(WinJ && !YinJ && w!=f && x==g && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCode.value="";
	}
	else if(WinJ && !ZinJ && w!=f && x==g && y==h){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCode.value="";
	}

	else if(XinJ && !WinJ && x!=g && y==h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCode.value="";
	}
	else if(XinJ && !YinJ && x!=g && w==f && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCode.value="";
	}
	else if(XinJ && !ZinJ && x!=g && w==f && y==h){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCode.value="";
	}

	else if(YinJ && !WinJ && y!=h && x==g && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCode.value="";
	}
	else if(YinJ && !XinJ && y!=h && w==f && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCode.value="";
	}
	else if(YinJ && !ZinJ && y!=h && w==f && x==g){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCode.value="";
	}

	else if(ZinJ && !WinJ && z!=i && x==g && y==h){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCode.value="";
	}
	else if(ZinJ && !XinJ && z!=i && w==f && y==h){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCode.value="";
	}
	else if(ZinJ && !YinJ && z!=i && w==f && x==g){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCode.value="";
	}

	//~1 dead,2 injured,1 ALIVE
	else if(XinJ && YinJ && !ZinJ && w==f && x!=g && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCode.value="";
	}
	else if(XinJ && ZinJ && !YinJ && w==f && x!=g && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCode.value="";
	}
	else if(YinJ && ZinJ && !XinJ && w==f && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCode.value="";
	}

	else if(WinJ && YinJ && !ZinJ && x==g && w!=f && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCode.value="";
	}
	else if(WinJ && ZinJ && !YinJ && x==g && w!=f && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCode.value="";
	}
	else if(YinJ && ZinJ && !WinJ && x==g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCode.value="";
	}
	
	else if(WinJ && XinJ && !ZinJ && y==h && w!=f && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCode.value="";
	}
	else if(WinJ && ZinJ && !XinJ && y==h && w!=f && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCode.value="";
	}
	else if(XinJ && ZinJ && !WinJ && y==h && x!=g && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCode.value="";
	}
	
	else if(WinJ && XinJ && !YinJ && z==i && w!=f && x!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCode.value="";
	}
	else if(WinJ && YinJ && !XinJ && z==i && w!=f && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCode.value="";
	}
	else if(XinJ && YinJ && !WinJ && z==i && x!=g && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCode.value="";
	}
	

	//~1 dead,1 injured, 2 alive
	else if(WinJ && XinJ && !YinJ && !ZinJ && w==f && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCode.value="";
	}
	else if(WinJ && YinJ && !XinJ && !ZinJ && w==f && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCode.value="";
	}
	else if(WinJ && ZinJ && !XinJ && !YinJ && w==f && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCode.value="";
	}

	else if(XinJ && WinJ && !YinJ && !ZinJ && x==g && w!=f){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCode.value="";
	}
	else if(XinJ && YinJ && !WinJ && !ZinJ && x==g && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCode.value="";
	}
	else if(XinJ && ZinJ && !WinJ && !YinJ && x==g && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCode.value="";
	}

	else if(YinJ && WinJ && !XinJ && !ZinJ && y==h && w!=f){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCode.value="";
	}
	else if(YinJ && XinJ && !WinJ && !ZinJ && y==h && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCode.value="";
	}
	else if(YinJ && ZinJ && !WinJ && !XinJ && y==h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCode.value="";
	}

	else if(ZinJ && WinJ && !XinJ && !YinJ && z==i && w!=f){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCode.value="";
	}
	else if(ZinJ && XinJ && !WinJ && !YinJ && z==i && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCode.value="";
	}
	else if(ZinJ && YinJ && !WinJ && !XinJ && z==i && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCode.value="";
	}


	//~2 dead,2 alive
	else if(WinJ && XinJ && !YinJ && !ZinJ && w==f && x==g){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCode.value="";
	}
	else if(WinJ && YinJ && !XinJ && !ZinJ && w==f && y==h){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCode.value="";
	}
	else if(WinJ && ZinJ && !XinJ && !YinJ && w==f && z==i){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCode.value="";
	}
	else if(XinJ && YinJ && !WinJ && !ZinJ && x==g && y==h){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCode.value="";
	}
	else if(XinJ && ZinJ && !WinJ && !YinJ && x==g && z==i){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCode.value="";
	}
	else if(YinJ && ZinJ && !WinJ && !XinJ && y==h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCode.value="";
	}


	//~1 dead 3 injured
	else if(XinJ && YinJ && ZinJ && x!=g && y!=h && z!=i && w==f){
		most_recent_trial_message.innerHTML = GrandResult[11];
		enterCode.value="";
	}
	else if(WinJ && YinJ && ZinJ && w!=f && y!=h && z!=i && x==g){
		most_recent_trial_message.innerHTML = GrandResult[11];
		enterCode.value="";
	}
	else if(WinJ && XinJ && ZinJ && w!=f && x!=g && z!=i && y==h){
		most_recent_trial_message.innerHTML = GrandResult[11];
		enterCode.value="";
	}
	else if(WinJ && XinJ && YinJ && w!=f && x!=g && y!=h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[11];
		enterCode.value="";
	}


	//~1 dead,3 alive
	else if(!XinJ && !YinJ && !ZinJ && w==f){
		most_recent_trial_message.innerHTML = GrandResult[12];
		enterCode.value="";
	}
	else if(!WinJ && !YinJ && !ZinJ && x==g){
		most_recent_trial_message.innerHTML = GrandResult[12];
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && !ZinJ && y==h){
		most_recent_trial_message.innerHTML = GrandResult[12];
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && !YinJ && z==i){
		most_recent_trial_message.innerHTML = GrandResult[12];
		enterCode.value="";
	}


	//~2 dead,2 injured
	else if(w==f && x==g && YinJ && ZinJ && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCode.value="";
	}
	else if(w==f && y==h && XinJ && ZinJ && x!=g && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCode.value="";
	}
	else if(w==f && z==i && XinJ && YinJ && x!=g && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCode.value="";
	}
	else if(x==g && y==h && WinJ && ZinJ && w!=f && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCode.value="";
	}
	else if(x==g && z==i && WinJ && YinJ && w!=f && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCode.value="";
	}
	else if(y==h && z==i && WinJ && XinJ && w!=f && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCode.value="";
	}

	//Append Trials
	newli.innerHTML= trialss;
	trial_lists.appendChild(newli);

	//Reactivate Mobile Keyboard
	for (i = 0; i < 10; i++) {
        var numbuttons = document.getElementById("btn" + i);
		numbuttons.disabled = false;
	}


	if (trialCode.innerHTML == theCode) {

		gameOverCond("Play Again","Code Cracked");
		codecrackedSong();
	}

	console.log(theCode);
}

//=====MAKE THE CODE GLOBALLY AVALIABLE=====//

f = String(gen4[0]);
g = String(gen4[1]);
h = String(gen4[2]);
i = String(gen4[3]);


j = [f,g,h,i];

theCode = f + g + h + i;

//=====END OF MAKE THE CODE GLOBALLY AVALIABLE=====/

//FIRE FUNCTION VARIABLE FOR BTN DECODE
let gameplay;

//When Decode Button Is Click For Mobile
decode.onclick = function(){
	
	gameplay = gameAction();
	OutOfMoves();

}

//When Decode Button Is Click For Pc
decodeTwo.onclick = function(){
	
	gameplay = gameActionPc();
	OutOfMoves();

}

//When Enter Key Is Pressed (For Pc)
enterCode.addEventListener("keyup",function(event){
	if(event.keyCode == 13){
		event.preventDefault();
		gameActionPc();
		OutOfMoves();
		}	
	}
);

//Toggle KeyBoard and Buttons For PC
usePcKeyboard.addEventListener('click', () => {
	SetFocus();
	toggleStyle(enterCodeBtn, 'display', 'none', 'block');
	toggleStyle(mobileKeysDiv, 'display', 'none', 'block');
	toggleStyle(enterCode, 'display', 'block', 'none');
	toggleStyle(decode, 'display', 'none', 'block');
	toggleStyle(decodeTwo, 'display','block','none');
	toggleInnerHtml(usePcKeyboard,'Use Buttons','Use KeyBoard');
	enterCode.value = enterCodeBtn.innerHTML;
});

//Start Timer On Page Load
// window.onload = startJSfunc(); 
window.onload = inGame_otherOptionsViewOptions.style.zIndex = "-40";
window.onload = crakingSectionDiv.style.opacity = "0";
window.onload = inGame_icons.style.opacity = "0";
window.onload = usePcKeyboard.style.opacity = "0";

window.onload = gameSong();


