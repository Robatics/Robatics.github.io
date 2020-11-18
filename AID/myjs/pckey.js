//Game Play Logic
function gameActionPc() {
	SetFocus();
	const newli = document.createElement("LI");
	const trialss = trialCode.innerHTML + " " + most_recent_trial_message.innerHTML;
	
	var w = enterCode.value[0];
	var x = enterCode.value[1];
	var y = enterCode.value[2];
	var z = enterCode.value[3];

	var f = String(gen4[0]);
	var g = String(gen4[1]);
	var h = String(gen4[2]);
	var i = String(gen4[3]);


	var j = [f,g,h,i];

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
	}

	console.log(theCode);
}