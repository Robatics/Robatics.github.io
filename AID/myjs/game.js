
//INGAME MAIN
const enterCode = document.getElementById('enterCode');

const enterCodeBtn = document.getElementById('enterCodeBtn');

const decode = document.getElementById('decode');

const most_recent_trial_message = document.getElementById('most_recent_trial_message');

const trialCode = document.getElementById('single_message');

const newtrial_message = document.getElementById('trial_message');

const newtrial_code = document.getElementById('trial_code');

const trial_lists = document.getElementById('trial_lists');

//IN GAME
const startCrackingGame = document.getElementById('codeSection');


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
const inGame_form = document.getElementById('enterForm');
const inGame_all_message = document.getElementById('all_message');
const inGame_decode_input = document.getElementById('decode');
const inGame_bottom_message = document.getElementById('bottom_message');

//MAJOR DIVS
const crakingSectionDiv = document.getElementById('crakingSection');
const Game_OverDiv = document.getElementById('Game_OverDiv');

const keepPlayingButton = document.querySelector('.keep-playing-button')
const retryButton = document.querySelector('.retry-button');

//TIME COUNTDOWN
const time_display = document.getElementById('time-left-display');
const restart_button = document.getElementById('start-button');


//Count Down
let timeCounter;
let startingMinutes = 3;
let startingSeconds = 60;
let time = startingMinutes * 60;

function countDown(speed=1000){
	var timeCounter = setInterval(updateCountdown,speed);
}

function updateCountdown(){
	let minutes = Math.floor(time/60);
	let seconds = time % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	time_display.innerHTML = `${minutes}:${seconds}`;

	if(seconds <= 0 && minutes <= 0){
		
		crakingSectionDiv.style.opacity='0.4';
		usePcKeyboard.style.opacity='0.4';
		Game_OverDiv.style.opacity='1';
		Game_OverDiv.style.zIndex ='40';
		inGame_icons.style.opacity = '0';
		inGame_otherOptionsViewOptions.style.opacity = '0';
		time_display.innerHTML = `00:00`
		clearInterval(timeCounter);
		timeCounter = null;
	}
	time--;
}


//Keep Playing
keepPlayingButton.addEventListener('click', () => {
	time = 1 * 60;;
	countDown(10000);
	
	Game_OverDiv.style.opacity='0';
	Game_OverDiv.style.zIndex ='-5';
	crakingSectionDiv.style.opacity='1';
	inGame_icons.style.opacity = '1';
	

	var cnt=0;
	function CountFun() {
	cnt = parseInt(cnt)+parseInt(1);
	if (cnt >= 1) {
		keepPlayingButton.style.display = "none";
		retryButton.style.marginLeft = "30%";
	};
}

CountFun();

});



//Try Again
retryButton.addEventListener('click', () => {
	location.reload();
});

restart_button.addEventListener('click', () => {
	location.reload();
});

inGame_otherOptionsNewgame.addEventListener('click', () => {
	location.reload();
});


//Style Toggler
function toggleStyle(el, prop, style1, style2) {
	el.style[prop] = el.style[prop] === style1 ? style2 : style1;
  }

//InnerHTML Toggler
function toggleInnerHtml(el, inner1, inner2) {
	el.innerHTML = el.innerHTML === inner1 ? inner2 : inner1;
  }

// function toggleClassname(el, class1, class2) {
// 	el.className = el.className === class1 ? class2 : class1;
//   }


//Change GrandResult to Emoji or Words
function toggleGrand() {
	GrandResult = GrandResult === resultsForEmoji ? results :  resultsForEmoji;
}
  
//Toggle Other Options
inGame_otherOptions.addEventListener('click', () => {

	toggleStyle(usePcKeyboard, 'opacity', '0.2', '1');
	toggleStyle(crakingSectionDiv, 'opacity', '0.2', '1');
	toggleStyle(inGame_otherOptionsViewOptions, 'opacity', '1', '0');
	toggleStyle(inGame_otherOptionsViewOptions, 'z-index', '40', '-40');

});

//Show Result Settings
inGame_otherOptionsSetings.addEventListener('click', () => {
	toggleStyle(inGame_otherOptionsToEmoji, 'display', 'block', 'none');
});


//Toggle InnerHTML Between Emojis and Words Usage 
inGame_otherOptionsToEmoji.addEventListener('click', e => {
	toggleGrand();
	toggleInnerHtml(inGame_otherOptionsToEmoji,'Use Emojis','Use Words');
	console.log(GrandResult);
	
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

});


//Auto Focus On Input
function SetFocus() {
	enterCode.focus();	
}

//=====Start Mobile Keyboard=====//

//Insert Button Value
function input(e) {
	const delButton = document.getElementById("btnDel");
	enterCodeBtn.innerHTML = enterCodeBtn.innerHTML + e.value;
	if (enterCodeBtn.innerHTML.length >= 4) {
			for (i = 0; i < 10; i++) {
			var numbuttons = document.getElementById("btn" + i);
			numbuttons.disabled = true;
		}
	}	
	console.log(enterCodeBtn.innerHTML.length);
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

function getRandom(min,max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(0,9));



///==============================///

//Results Display

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


//Game Play Logic
function gameAction() {

	const right_arrow ='<i class="fa fa-arrow-right"></i>'
	const newli = document.createElement("LI");
	const trialss = trialCode.innerHTML + " " + right_arrow + " " + most_recent_trial_message.innerHTML;
	
	let screen = enterCodeBtn.innerHTML.split("");

	var w = screen[0];
	var x = screen[1];
	var y = screen[2];
	var z = screen[3];

	

	var f = String(5);
	var g = String(3);
	var h = String(1);
	var i = String(8);

	var j = [f,g,h,i];

	var k = f + g + i + h;

	trialCode.innerHTML = enterCodeBtn.innerHTML;

	const WinJ = j.includes(w);
	const XinJ = j.includes(x);	
	const YinJ = j.includes(y);
	const ZinJ = j.includes(z);

	//~NUMBER REPITITION
	if(w==x ||  w==y || w==z || x==y || x==z || y==z){
		most_recent_trial_message.innerHTML = "Repetition!! Change number";
		enterCodeBtn.innerHTML="";
	}

	//~3 injured,1 alive
	else if(WinJ && XinJ && YinJ && !ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[0];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && XinJ && ZinJ && !YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[0];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && YinJ && ZinJ && !XinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[0];
		enterCodeBtn.innerHTML="";
	}
	else if(XinJ && YinJ && ZinJ && !WinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[0];
		enterCodeBtn.innerHTML="";
	}

	// ~2 injured,2 alive
	else if(!YinJ && !ZinJ && WinJ && XinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCodeBtn.innerHTML="";
	}
	else if(!XinJ && !ZinJ && WinJ && YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCodeBtn.innerHTML="";
	}
	else if(!XinJ && !YinJ && WinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCodeBtn.innerHTML="";
	}
	else if(!WinJ && !ZinJ && XinJ && YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCodeBtn.innerHTML="";
	}
	else if(!WinJ && !YinJ && XinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCodeBtn.innerHTML="";
	}
	else if(!WinJ && !XinJ && YinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[1];
		enterCodeBtn.innerHTML="";
	}

	//~1 injured,3 alive
	else if(!XinJ && !YinJ && !ZinJ && WinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[2];
		enterCodeBtn.innerHTML="";
	}
	else if(!WinJ && !YinJ && !ZinJ && XinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[2];
		enterCodeBtn.innerHTML="";
	}
	else if(!WinJ && !XinJ && !ZinJ && YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[2];
		enterCodeBtn.innerHTML="";
	}
	else if(!WinJ && !XinJ && !YinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[2];
		enterCodeBtn.innerHTML="";
	}


	//~ALL ALIVE
	else if(!WinJ && !XinJ && !YinJ && !ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[3];
		enterCodeBtn.innerHTML="";
	}

	//~ALL INJURED
	else if(WinJ && XinJ && YinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[4];
		enterCodeBtn.innerHTML="";
	}

	//~ALL DEAD
	else if(w==f && x==g && y==h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[5];
		enterCodeBtn.innerHTML="";
	}

	//~3 dead,1 alive
	else if(w==f && x==g && y==h && !ZinJ){
		most_recent_trial_message.innerHTML = GrandResult[6];
		enterCodeBtn.innerHTML="";
	}
	else if(w==f && x==g && z==i && !YinJ){
		most_recent_trial_message.innerHTML = GrandResult[6];
		enterCodeBtn.innerHTML="";
	}
	else if(w==f && y==h && z==i && XinJ){
		most_recent_trial_message.innerHTML = GrandResult[6];
		enterCodeBtn.innerHTML="";
	}
	else if(x==g && y==h && z==i && !WinJ){
		most_recent_trial_message.innerHTML = GrandResult[6];
		enterCodeBtn.innerHTML="";
	}


	//~2 dead,1 injured,1 ALIVE
	else if(WinJ && !XinJ && w!=f && y==h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && !YinJ && w!=f && x==g && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && !ZinJ && w!=f && x==g && y==h){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
	}

	else if(XinJ && !WinJ && x!=g && y==h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
	}
	else if(XinJ && !YinJ && x!=g && w==f && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
	}
	else if(XinJ && !ZinJ && x!=g && w==f && y==h){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
	}

	else if(YinJ && !WinJ && y!=h && x==g && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
	}
	else if(YinJ && !XinJ && y!=h && w==f && z==i){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
	}
	else if(YinJ && !ZinJ && y!=h && w==f && x==g){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
	}

	else if(ZinJ && !WinJ && z!=i && x==g && y==h){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
	}
	else if(ZinJ && !XinJ && z!=i && w==f && y==h){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
	}
	else if(ZinJ && !YinJ && z!=i && w==f && x==g){
		most_recent_trial_message.innerHTML = GrandResult[7];
		enterCodeBtn.innerHTML="";
	}

	//~1 dead,2 injured,1 ALIVE
	else if(XinJ && YinJ && !ZinJ && w==f && x!=g && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
	}
	else if(XinJ && ZinJ && !YinJ && w==f && x!=g && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
	}
	else if(YinJ && ZinJ && !XinJ && w==f && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
	}

	else if(WinJ && YinJ && !ZinJ && x==g && w!=f && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && ZinJ && !YinJ && x==g && w!=f && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
	}
	else if(YinJ && ZinJ && !WinJ && x==g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
	}
	
	else if(WinJ && XinJ && !ZinJ && y==h && w!=f && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && ZinJ && !XinJ && y==h && w!=f && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
	}
	else if(XinJ && ZinJ && !WinJ && y==h && x!=g && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
	}
	
	else if(WinJ && XinJ && !YinJ && z==i && w!=f && x!=i){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && YinJ && !XinJ && z==i && w!=f && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
	}
	else if(XinJ && YinJ && !WinJ && z==i && x!=g && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[8];
		enterCodeBtn.innerHTML="";
	}
	

	//~1 dead,1 injured, 2 alive
	else if(WinJ && XinJ && !YinJ && !ZinJ && w==f && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && YinJ && !XinJ && !ZinJ && w==f && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && ZinJ && !XinJ && !YinJ && w==f && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
	}

	else if(XinJ && WinJ && !YinJ && !ZinJ && x==g && w!=f){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
	}
	else if(XinJ && YinJ && !WinJ && !ZinJ && x==g && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
	}
	else if(XinJ && ZinJ && !WinJ && !YinJ && x==g && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
	}

	else if(YinJ && WinJ && !XinJ && !ZinJ && y==h && w!=f){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
	}
	else if(YinJ && XinJ && !WinJ && !ZinJ && y==h && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
	}
	else if(YinJ && ZinJ && !WinJ && !XinJ && y==h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
	}

	else if(ZinJ && WinJ && !XinJ && !YinJ && z==i && w!=f){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
	}
	else if(ZinJ && XinJ && !WinJ && !YinJ && z==i && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
	}
	else if(ZinJ && YinJ && !WinJ && !XinJ && z==i && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[9];
		enterCodeBtn.innerHTML="";
	}


	//~2 dead,2 alive
	else if(WinJ && XinJ && !YinJ && !ZinJ && w==f && x==g){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && YinJ && !XinJ && !ZinJ && w==f && y==h){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && ZinJ && !XinJ && !YinJ && w==f && z==i){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCodeBtn.innerHTML="";
	}
	else if(XinJ && YinJ && !WinJ && !ZinJ && x==g && y==h){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCodeBtn.innerHTML="";
	}
	else if(XinJ && ZinJ && !WinJ && !YinJ && x==g && z==i){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCodeBtn.innerHTML="";
	}
	else if(YinJ && ZinJ && !WinJ && !XinJ && y==h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[10];
		enterCodeBtn.innerHTML="";
	}


	//~1 dead 3 injured
	else if(XinJ && YinJ && ZinJ && x!=g && y!=h && z!=i && w==f){
		most_recent_trial_message.innerHTML = GrandResult[11];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && YinJ && ZinJ && w!=f && y!=h && z!=i && x==g){
		most_recent_trial_message.innerHTML = GrandResult[11];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && XinJ && ZinJ && w!=f && x!=g && z!=i && y==h){
		most_recent_trial_message.innerHTML = GrandResult[11];
		enterCodeBtn.innerHTML="";
	}
	else if(WinJ && XinJ && YinJ && w!=f && x!=g && y!=h && z==i){
		most_recent_trial_message.innerHTML = GrandResult[11];
		enterCodeBtn.innerHTML="";
	}


	//~1 dead,3 alive
	else if(!XinJ && !YinJ && !ZinJ && w==f){
		most_recent_trial_message.innerHTML = GrandResult[12];
		enterCodeBtn.innerHTML="";
	}
	else if(!WinJ && !YinJ && !ZinJ && x==g){
		most_recent_trial_message.innerHTML = GrandResult[12];
		enterCodeBtn.innerHTML="";
	}
	else if(!WinJ && !XinJ && !ZinJ && y==h){
		most_recent_trial_message.innerHTML = GrandResult[12];
		enterCodeBtn.innerHTML="";
	}
	else if(!WinJ && !XinJ && !YinJ && z==i){
		most_recent_trial_message.innerHTML = GrandResult[12];
		enterCodeBtn.innerHTML="";
	}


	//~2 dead,2 injured
	else if(w==f && x==g && YinJ && ZinJ && y!=h && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCodeBtn.innerHTML="";
	}
	else if(w==f && y==h && XinJ && ZinJ && x!=g && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCodeBtn.innerHTML="";
	}
	else if(w==f && z==i && XinJ && YinJ && x!=g && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCodeBtn.innerHTML="";
	}
	else if(x==g && y==h && WinJ && ZinJ && w!=f && z!=i){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCodeBtn.innerHTML="";
	}
	else if(x==g && z==i && WinJ && YinJ && w!=f && y!=h){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCodeBtn.innerHTML="";
	}
	else if(y==h && z==i && WinJ && XinJ && w!=f && x!=g){
		most_recent_trial_message.innerHTML = GrandResult[13];
		enterCodeBtn.innerHTML="";
	}

	//Append Trials
	newli.innerHTML= trialss;
	trial_lists.appendChild(newli);

	//Reactivate Mobile Keyboard
	for (i = 0; i < 10; i++) {
        var numbuttons = document.getElementById("btn" + i);
		numbuttons.disabled = false;
	}
}




//Game Play Logic
function gameActionPc() {
	SetFocus();

	const right_arrow ='<i class="fa fa-arrow-right"></i>'
	const newli = document.createElement("LI");
	const trialss = trialCode.innerHTML + " " + most_recent_trial_message.innerHTML;
	
	var w = enterCode.value[0];
	var x = enterCode.value[1];
	var y = enterCode.value[2];
	var z = enterCode.value[3];

	var f = String(5);
	var g = String(3);
	var h = String(1);
	var i = String(8);

	var j = [f,g,h,i];

	var k = f + g + i + h;

	trialCode.innerHTML = enterCode.value + " " + right_arrow;

	const WinJ = j.includes(w);
	const XinJ = j.includes(x);	
	const YinJ = j.includes(y);
	const ZinJ = j.includes(z);

	//~NUMBER REPITITION
	if(w==x ||  w==y || w==z || x==y || x==z || y==z){
		most_recent_trial_message.innerHTML = "Repetition!! Change number";
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
}

let gameplay;

//When Decode Button Is Click
decode.onclick = function(){
	
	gameplay = gameAction();

}

//When Enter Key Is Pressed
enterCode.addEventListener("keyup",function(event){
	if(event.keyCode == 13){
		event.preventDefault();
		gameActionPc();
		}	
	}
);

const usePcKeyboard = document.getElementById("usePcKeyboard");
const mobileKeysDiv = document.getElementById("mobileKeys");
const enterCodeForMobile = document.querySelector(".enterCode");

//Toggle KeyBoard and Buttons For PC
usePcKeyboard.addEventListener('click', () => {
	toggleStyle(enterCodeBtn, 'display', 'none', 'block');
	toggleStyle(mobileKeysDiv, 'display', 'none', 'block');
	toggleStyle(enterCode, 'display', 'block', 'none');
	toggleInnerHtml(usePcKeyboard,'Use Buttons','Use KeyBoard');
});



//Start Timer On Page Load
window.onload = countDown();










