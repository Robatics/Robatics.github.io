

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