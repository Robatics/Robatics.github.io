

var menuBtn = document.getElementById('menuBtn');  
    
var sideNav  = document.getElementById('sideNav');

sideNav.style.right = "-250px";

menuBtn.onclick = function() {

  if(sideNav.style.right == "-250px"){
    sideNav.style.right ="0";
  }
  else{
    sideNav.style.right="-250px";
  }
} 

//Hero Animation
var hero_images = document.querySelector('.hero_image').getElementsByTagName('img');

var herotext = document.querySelector('.hero_message');

let q = 0;
function animateText(){
  text=[
    "Our affiliation with top manufacturers across the globe makes us stand out",
    "Quick Response and Faster Deliveries",
    "Quality Assurance and Trustworthy Staffs",
    "We Provide The Perfect Mechanical, Electrical and Maintenance Service"
  ];

  herotext.innerHTML = text[q];
    
  q++;

  if(q > 3){
      q = 0;
  }
}
setInterval( animateText,11500);

let firstAnime;
let lastAnime;

let lopperAnime;
let i;
let animeSaver;
let animeLoopString;

function heroSlider(delay1,delay2,delayend,iteration,elementIndex,direction=""){

//Random Numbers Generation
function generateRandomNumber(min,max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Store Random Number
let randynumber = generateRandomNumber(0,3);

//Set Default Direction
if (direction == "") {
if (randynumber == 0) {
direction = "LR";
}
else if (randynumber == 1) {
direction = "UD";
}
else if (randynumber == 2) {
direction = "RL";
}
else if (randynumber == 3) {
direction = "DU";
}
}

//Store First and Last animation
firstAnime = "sliding" + direction + " 10s ease-in-out " + delay1 + "s forwards,";
lastAnime = ",sliding" + direction + " 10s ease-in-out " + delayend + "s forwards";

//Store the looped animation in an array first so as to push
animeSaver = [];

//Loops the animation (stop/delay2) - 1 number of times
for (i = delay2; i < delayend; i += iteration) {
lopperAnime = "sliding" + direction + " 10s ease-in-out " + i + "s forwards";
animeSaver.push(lopperAnime);
}

//Turn the animation loop array To a String
animeLoopString = String(animeSaver);

//Compile the animation together
let ElementAnimation = firstAnime + animeLoopString + lastAnime;

//Add the animation to the element
hero_images[elementIndex].style.animation = ElementAnimation;

}
//Fire Animations
heroSlider(0,40,1000,40,0,"LR");
heroSlider(10,50,1010,40,1,"UD");
heroSlider(20,60,1020,40,2,"RL");
heroSlider(30,70,1030,40,3,"DU");

//==========Who We Are Video===================================//
const playBtn = document.querySelector('.playBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const videodiv = document.querySelector('.Video');
const videodivsource = document.querySelector('.videoSource');
const overlay = document.querySelector('.overroll');

overlay.addEventListener('click',function() {
    videodiv.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    videodiv.style.zIndex = "100";
  });

videodiv.addEventListener('click',function() {
if (!videodiv.paused) {
    videodiv.style.zIndex = "-100";
    playBtn.style.display = "block";

    console.log("paused");
    } else{
        
    console.log("playing");
    }
    
});
//==========End Of Who We Are Video===================================//

//==========SearchForm Display=======================================//
let theSearcher = document.querySelector('.thesearcher');
let menuSearchBtn = document.querySelector('#menu-search');

const joinBtn = document.querySelector('.join');
const searchTogglerBtn = document.querySelector('.searchToggler');
 
let otherPagethesearcher = document.querySelector('.otherPagethesearcher');

//Style Toggler
function toggleStyle(el, prop, style1, style2) {
	el.style[prop] = el.style[prop] === style1 ? style2 : style1;
  }

searchTogglerBtn.addEventListener('click',function() {
  toggleStyle(theSearcher, 'opacity', '0', '1');
  toggleStyle(theSearcher, 'top', '20%', '10%');
  toggleStyle(theSearcher, 'zIndex', '-200', '200');
});

//==========End Of SearchForm Display=======================================//

//=-========Equalize Element Heights========================================//
function adjustheight(){

	var tallestHeight = document.querySelector('#tallest').offsetHeight;
	var shorterHeight = document.querySelector('.smaller').offsetHeight;
	var shorterHeight = document.querySelector('.smallee').offsetHeight;

    var firstHeight = document.querySelector('#first').offsetHeight;
	var secondHeight = document.querySelector('#second').offsetHeight;
	var thirdHeight = document.querySelector('#third').offsetHeight;

	var diff = tallestHeight - shorterHeight ; 

		if(shorterHeight < tallestHeight){
			document.querySelector('.smaller').style.height = tallestHeight + "px";
			document.querySelector('.smallee').style.height = tallestHeight + "px";
		}

    if(thirdHeight < secondHeight){
			document.querySelector('#first').style.height = secondHeight + "px";
			document.querySelector('#third').style.height = secondHeight + "px";
		}

}

adjustheight();

//=-========End Of Equalize Element Heights========================================//


var Scrollpos = window.pageYOffset;
var prevScrollpos = window.pageYOffset;


if (prevScrollpos <= 130) {
    document.querySelector('header').style.background = "#fff";
  }

window.onscroll = function(){
	var currentScrollpos = window.pageYOffset;
  
if (currentScrollpos <= 130) {
    document.querySelector('header').style.background = "#fff";
  }
  else if (currentScrollpos > 130) {
    document.querySelector('header').style.background = "rgb(235, 233, 233)";
  }

  if (currentScrollpos > 600) {
    document.querySelector('#goUp').style.display = "block";
  }else{
    document.querySelector('#goUp').style.display = "none";
  }
  
}

document.querySelector('#goUp').addEventListener('click',function() {
    document.querySelector('.back-to-top-text-double').style.diplay = "block";
    document.querySelector('.back-to-top-text').style.diplay = "none";
  });

function scrollAppear(){
  var feature = document.querySelector('.feature-wrapper');;
  var featureP = feature.getElementsByTagName("p");
  
  for (let p = 0; p < featureP.length; p++) {

  var featurePposition = featureP[p].getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  if (featurePposition < screenPosition) {
    featureP[p].style.transform = "translateY(0px)";
    featureP[p].style.opacity = "1";
  }
}
}

window.addEventListener('scroll',scrollAppear);
