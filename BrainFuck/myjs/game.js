
const enterCode = document.getElementById('enterCode');

const decode = document.getElementById('decode');

const most_recent_trial_message = document.getElementById('most_recent_trial_message');

const trialCode = document.getElementById('single_message');

const newtrial_message = document.getElementById('trial_message');

const newtrial_code = document.getElementById('trial_code');

const trial_lists = document.getElementById('trial_lists');

//IN GAME
const startCrackingGame = document.getElementById('codeSection');


//INGAME SIDEBAR
const inGame_otherOptions = document.getElementById('otherOptions');
const inGame_otherOptionsUl = document.getElementById('options');
const inGame_hint = document.getElementById('hint');
const inGame_partialFix = document.getElementById('partialfix');
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
let startingMinutes = 5;
let time = startingMinutes * 60;



//Game Over
// inGame_partialFix.addEventListener('click', () => {
// 	crakingSectionDiv.style.opacity='0.4';	
// 	Game_OverDiv.style.opacity='1';
// 	Game_OverDiv.style.zIndex ='40';
// });



function updateCountdown(){
	let minutes = Math.floor(time/60);
	let seconds = time % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	time_display.innerHTML = `${minutes}:${seconds}`;

	if(seconds <= 0 && minutes <= 0){
		
		crakingSectionDiv.style.opacity='0.4';	
		Game_OverDiv.style.opacity='1';
		Game_OverDiv.style.zIndex ='40';
		clearInterval(timeCounter);
		startingMinutes = 2;
	}
	
	time--;

}


function countDown(){
	var timeCounter = setInterval(updateCountdown,1000);
	}

//Keep Playing
keepPlayingButton.addEventListener('click', () => {
	time = 2 * 60;;
	countDown();
	
	Game_OverDiv.style.opacity='0';
	Game_OverDiv.style.zIndex ='-5';
	crakingSectionDiv.style.opacity='1';

});

//Try Again
retryButton.addEventListener('click', () => {
	location.reload();
});

restart_button.addEventListener('click', () => {
	location.reload();
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
	enterCode.value = enterCode.value + e.value;
	if (enterCode.value.length >= 4) {
			for (i = 0; i < 10; i++) {
			var numbuttons = document.getElementById("btn" + i);
			numbuttons.disabled = true;
		}
	}	
	console.log(enterCode.value.length);
}

//Delete Last Value
function del() {
	for (i = 0; i < 10; i++) {
		var numbuttons = document.getElementById("btn" + i);
		numbuttons.disabled = false;
	}
    enterCode.value = enterCode.value.substr(0, enterCode.value.length - 1);
}

// Disable keyboard by adding readonly attribute to field
// $(document).ready(function() {
  
// 	if (Modernizr.touch) {

// 		$('[data-disable-touch-keyboard]').attr('readonly', 'readonly');
// 	}
// }

// var field = document.createElement('input');
// field.setAttribute('type', 'text');
// field.style.background = "red";
// document.body.appendChild(field);

// setTimeout(function() {
//     field.focus();
//     setTimeout(function() {
//         field.setAttribute('style', 'display:none;');
//     }, 1000);
// }, 1000);

//=====Mobile KeyBoard End=====//

//Game Play Logic
function gameAction() {
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
		most_recent_trial_message.innerHTML = "3 injured,1 alive";
		enterCode.value="";
	}
	else if(WinJ && XinJ && ZinJ && !YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "3 injured,1 alive";
		enterCode.value="";
	}
	else if(WinJ && YinJ && ZinJ && !XinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "3 injured,1 alive";
		enterCode.value="";
	}
	else if(XinJ && YinJ && ZinJ && !WinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "3 injured,1 alive";
		enterCode.value="";
	}

	// ~2 injured,2 alive
	else if(!YinJ && !ZinJ && WinJ && XinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "2 injured,2 alive";
		enterCode.value="";
	}
	else if(!XinJ && !ZinJ && WinJ && YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "2 injured,2 alive";
		enterCode.value="";
	}
	else if(!XinJ && !YinJ && WinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "2 injured,2 alive";
		enterCode.value="";
	}
	else if(!WinJ && !ZinJ && XinJ && YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "2 injured,2 alive";
		enterCode.value="";
	}
	else if(!WinJ && !YinJ && XinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "2 injured,2 alive";
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && YinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "2 injured,2 alive";
		enterCode.value="";
	}

	//~1 injured,3 alive
	else if(!XinJ && !YinJ && !ZinJ && WinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "1 injured,3 alive";
		enterCode.value="";
	}
	else if(!WinJ && !YinJ && !ZinJ && XinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "1 injured,3 alive";
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && !ZinJ && YinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "1 injured,3 alive";
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && !YinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "1 injured,3 alive";
		enterCode.value="";
	}


	//~ALL ALIVE
	else if(!WinJ && !XinJ && !YinJ && !ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "ALL ALIVE";
		enterCode.value="";
	}

	//~ALL INJURED
	else if(WinJ && XinJ && YinJ && ZinJ && w!=f && x!=g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "ALL INJURED";
		enterCode.value="";
	}

	//~ALL DEAD
	else if(w==f && x==g && y==h && z==i){
		most_recent_trial_message.innerHTML = "ALL DEAD, CODE CRACKED";
		enterCode.value="";
	}

	//~3 dead,1 alive
	else if(w==f && x==g && y==h && !ZinJ){
		most_recent_trial_message.innerHTML = "3 dead,1 alive";
		enterCode.value="";
	}
	else if(w==f && x==g && z==i && !YinJ){
		most_recent_trial_message.innerHTML = "3 dead,1 alive";
		enterCode.value="";
	}
	else if(w==f && y==h && z==i && XinJ){
		most_recent_trial_message.innerHTML = "3 dead,1 alive";
		enterCode.value="";
	}
	else if(x==g && y==h && z==i && !WinJ){
		most_recent_trial_message.innerHTML = "3 dead,1 alive";
		enterCode.value="";
	}


	//~2 dead,1 injured,1 ALIVE
	else if(WinJ && !XinJ && w!=f && y==h && z==i){
		most_recent_trial_message.innerHTML = "2 dead,1 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(WinJ && !YinJ && w!=f && x==g && z==i){
		most_recent_trial_message.innerHTML = "2 dead,1 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(WinJ && !ZinJ && w!=f && x==g && y==h){
		most_recent_trial_message.innerHTML = "2 dead,1 injured,1 ALIVE";
		enterCode.value="";
	}

	else if(XinJ && !WinJ && x!=g && y==h && z==i){
		most_recent_trial_message.innerHTML = "2 dead,1 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(XinJ && !YinJ && x!=g && w==f && z==i){
		most_recent_trial_message.innerHTML = "2 dead,1 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(XinJ && !ZinJ && x!=g && w==f && y==h){
		most_recent_trial_message.innerHTML = "2 dead,1 injured,1 ALIVE";
		enterCode.value="";
	}

	else if(YinJ && !WinJ && y!=h && x==g && z==i){
		most_recent_trial_message.innerHTML = "2 dead,1 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(YinJ && !XinJ && y!=h && w==f && z==i){
		most_recent_trial_message.innerHTML = "2 dead,1 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(YinJ && !ZinJ && y!=h && w==f && x==g){
		most_recent_trial_message.innerHTML = "2 dead,1 injured,1 ALIVE";
		enterCode.value="";
	}

	else if(ZinJ && !WinJ && z!=i && x==g && y==h){
		most_recent_trial_message.innerHTML = "2 dead,1 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(ZinJ && !XinJ && z!=i && w==f && y==h){
		most_recent_trial_message.innerHTML = "2 dead,1 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(ZinJ && !YinJ && z!=i && w==f && x==g){
		most_recent_trial_message.innerHTML = "2 dead,1 injured,1 ALIVE";
		enterCode.value="";
	}

	//~1 dead,2 injured,1 ALIVE
	else if(XinJ && YinJ && !ZinJ && w==f && x!=g && y!=h){
		most_recent_trial_message.innerHTML = "1 dead,2 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(XinJ && ZinJ && !YinJ && w==f && x!=g && z!=i){
		most_recent_trial_message.innerHTML = "1 dead,2 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(YinJ && ZinJ && !XinJ && w==f && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "1 dead,2 injured,1 ALIVE";
		enterCode.value="";
	}

	else if(WinJ && YinJ && !ZinJ && x==g && w!=f && y!=h){
		most_recent_trial_message.innerHTML = "1 dead,2 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(WinJ && ZinJ && !YinJ && x==g && w!=f && z!=i){
		most_recent_trial_message.innerHTML = "1 dead,2 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(YinJ && ZinJ && !WinJ && x==g && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "1 dead,2 injured,1 ALIVE";
		enterCode.value="";
	}
	
	else if(WinJ && XinJ && !ZinJ && y==h && w!=f && x!=g){
		most_recent_trial_message.innerHTML = "1 dead,2 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(WinJ && ZinJ && !XinJ && y==h && w!=f && z!=i){
		most_recent_trial_message.innerHTML = "1 dead,2 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(XinJ && ZinJ && !WinJ && y==h && x!=g && z!=i){
		most_recent_trial_message.innerHTML = "1 dead,2 injured,1 ALIVE";
		enterCode.value="";
	}
	
	else if(WinJ && XinJ && !YinJ && z==i && w!=f && x!=i){
		most_recent_trial_message.innerHTML = "1 dead,2 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(WinJ && YinJ && !XinJ && z==i && w!=f && y!=h){
		most_recent_trial_message.innerHTML = "1 dead,2 injured,1 ALIVE";
		enterCode.value="";
	}
	else if(XinJ && YinJ && !WinJ && z==i && x!=g && y!=h){
		most_recent_trial_message.innerHTML = "1 dead,2 injured,1 ALIVE";
		enterCode.value="";
	}
	

	//~1 dead,1 injured, 2 alive
	else if(WinJ && XinJ && !YinJ && !ZinJ && w==f && x!=g){
		most_recent_trial_message.innerHTML = "1 dead,1 injured, 2 alive";
		enterCode.value="";
	}
	else if(WinJ && YinJ && !XinJ && !ZinJ && w==f && y!=h){
		most_recent_trial_message.innerHTML = "1 dead,1 injured, 2 alive";
		enterCode.value="";
	}
	else if(WinJ && ZinJ && !XinJ && !YinJ && w==f && z!=i){
		most_recent_trial_message.innerHTML = "1 dead,1 injured, 2 alive";
		enterCode.value="";
	}

	else if(XinJ && WinJ && !YinJ && !ZinJ && x==g && w!=f){
		most_recent_trial_message.innerHTML = "1 dead,1 injured, 2 alive";
		enterCode.value="";
	}
	else if(XinJ && YinJ && !WinJ && !ZinJ && x==g && y!=h){
		most_recent_trial_message.innerHTML = "1 dead,1 injured, 2 alive";
		enterCode.value="";
	}
	else if(XinJ && ZinJ && !WinJ && !YinJ && x==g && z!=i){
		most_recent_trial_message.innerHTML = "1 dead,1 injured, 2 alive";
		enterCode.value="";
	}

	else if(YinJ && WinJ && !XinJ && !ZinJ && y==h && w!=f){
		most_recent_trial_message.innerHTML = "1 dead,1 injured, 2 alive";
		enterCode.value="";
	}
	else if(YinJ && XinJ && !WinJ && !ZinJ && y==h && x!=g){
		most_recent_trial_message.innerHTML = "1 dead,1 injured, 2 alive";
		enterCode.value="";
	}
	else if(YinJ && ZinJ && !WinJ && !XinJ && y==h && z!=i){
		most_recent_trial_message.innerHTML = "1 dead,1 injured, 2 alive";
		enterCode.value="";
	}

	else if(ZinJ && WinJ && !XinJ && !YinJ && z==i && w!=f){
		most_recent_trial_message.innerHTML = "1 dead,1 injured, 2 alive";
		enterCode.value="";
	}
	else if(ZinJ && XinJ && !WinJ && !YinJ && z==i && x!=g){
		most_recent_trial_message.innerHTML = "1 dead,1 injured, 2 alive";
		enterCode.value="";
	}
	else if(ZinJ && YinJ && !WinJ && !XinJ && z==i && y!=h){
		most_recent_trial_message.innerHTML = "1 dead,1 injured, 2 alive";
		enterCode.value="";
	}


	//~2 dead,2 alive
	else if(WinJ && XinJ && !YinJ && !ZinJ && w==f && x==g){
		most_recent_trial_message.innerHTML = "2 dead,2 alive";
		enterCode.value="";
	}
	else if(WinJ && YinJ && !XinJ && !ZinJ && w==f && y==h){
		most_recent_trial_message.innerHTML = "2 dead,2 alive";
		enterCode.value="";
	}
	else if(WinJ && ZinJ && !XinJ && !YinJ && w==f && z==i){
		most_recent_trial_message.innerHTML = "2 dead,2 alive";
		enterCode.value="";
	}
	else if(XinJ && YinJ && !WinJ && !ZinJ && x==g && y==h){
		most_recent_trial_message.innerHTML = "2 dead,2 alive";
		enterCode.value="";
	}
	else if(XinJ && ZinJ && !WinJ && !YinJ && x==g && z==i){
		most_recent_trial_message.innerHTML = "2 dead,2 alive";
		enterCode.value="";
	}
	else if(YinJ && ZinJ && !WinJ && !XinJ && y==h && z==i){
		most_recent_trial_message.innerHTML = "2 dead,2 alive";
		enterCode.value="";
	}


	//~1 dead 3 injured
	else if(XinJ && YinJ && ZinJ && x!=g && y!=h && z!=i && w==f){
		most_recent_trial_message.innerHTML = "1 dead 3 injured";
		enterCode.value="";
	}
	else if(WinJ && YinJ && ZinJ && w!=f && y!=h && z!=i && x==g){
		most_recent_trial_message.innerHTML = "1 dead 3 injured";
		enterCode.value="";
	}
	else if(WinJ && XinJ && ZinJ && w!=f && x!=g && z!=i && y==h){
		most_recent_trial_message.innerHTML = "1 dead 3 injured";
		enterCode.value="";
	}
	else if(WinJ && XinJ && YinJ && w!=f && x!=g && y!=h && z==i){
		most_recent_trial_message.innerHTML = "1 dead 3 injured";
		enterCode.value="";
	}


	//~1 dead,3 alive
	else if(!XinJ && !YinJ && !ZinJ && w==f){
		most_recent_trial_message.innerHTML = "1 dead,3 alive";
		enterCode.value="";
	}
	else if(!WinJ && !YinJ && !ZinJ && x==g){
		most_recent_trial_message.innerHTML = "1 dead,3 alive";
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && !ZinJ && y==h){
		most_recent_trial_message.innerHTML = "1 dead,3 alive";
		enterCode.value="";
	}
	else if(!WinJ && !XinJ && !YinJ && z==i){
		most_recent_trial_message.innerHTML = "1 dead,3 alive";
		enterCode.value="";
	}


	//~2 dead,2 injured
	else if(w==f && x==g && YinJ && ZinJ && y!=h && z!=i){
		most_recent_trial_message.innerHTML = "2 dead,2 injured";
		enterCode.value="";
	}
	else if(w==f && y==h && XinJ && ZinJ && x!=g && z!=i){
		most_recent_trial_message.innerHTML = "2 dead,2 injured";
		enterCode.value="";
	}
	else if(w==f && z==i && XinJ && YinJ && x!=g && y!=h){
		most_recent_trial_message.innerHTML = "2 dead,2 injured";
		enterCode.value="";
	}
	else if(x==g && y==h && WinJ && ZinJ && w!=f && z!=i){
		most_recent_trial_message.innerHTML = "2 dead,2 injured";
		enterCode.value="";
	}
	else if(x==g && z==i && WinJ && YinJ && w!=f && y!=h){
		most_recent_trial_message.innerHTML = "2 dead,2 injured";
		enterCode.value="";
	}
	else if(y==h && z==i && WinJ && XinJ && w!=f && x!=g){
		most_recent_trial_message.innerHTML = "2 dead,2 injured";
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
	
//When Decode Button Is Click
decode.onclick = function(){
	gameAction();

}

//When Enter Key Is Pressed
enterCode.addEventListener("keyup",function(event){
	if(event.keyCode == 13){
		event.preventDefault();
		gameAction();
		}	
	}
);

//Start Timer On Page Load
window.onload = countDown();










