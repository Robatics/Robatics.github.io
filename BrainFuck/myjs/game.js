
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
const inGame_all_message = document.getElementById('all_message');
const inGame_decode_input = document.getElementById('decode');
const inGame_bottom_message = document.getElementById('bottom_message');

console.log(inGame_otherOptionsUl);
//Toggle Other Options
// inGame_otherOptions.addEventListener('click', () => {
// 	inGame_otherOptionsUl.classList.toggle('show');

// });

//Toggle full Messages
inGame_Trails_and_Stuff.addEventListener('click', () => {
	inGame_all_message.classList.toggle('hide');

});

decode.onclick = function(){
	const right_arrow ='<i class="fa fa-arrow-right"></i>'
	const newli = document.createElement("LI");
	const trialss = trialCode.innerHTML + " " + most_recent_trial_message.innerHTML;
	
	var k = String(enterCode.value[0]);
	var l = String(enterCode.value[1]);
	var m = String(enterCode.value[2]);
	var n = String(enterCode.value[3]);

	var a = String(1);
	var b = String(2);
	var c = String(3);
	var d = String(4);

	var i = a + b + c + d;

	var j = i.split("");

	
	console.log(typeof j);


	trialCode.innerHTML = enterCode.value + " " + right_arrow;
 //    if (n in j) {
	most_recent_trial_message.innerHTML = String(enterCode.value[3]) + j[2];
// }else{
// 	most_recent_trial_message.innerHTML = "nothing" ;
// }
	enterCode.value="";

	//newtrial_message.innerHTML= trialss;
	//newli.appendChild(trialss);

	newli.innerHTML= trialss;
	trial_lists.appendChild(newli);

}

// enterCode.addEventListener("keyup",function(event){
// 	if(event.keyCode == 13){
// 		event.preventDefault();
// 		inGame_time.classList.toggle('hide');
// 		// decode.onclick;
// 	}
// });














