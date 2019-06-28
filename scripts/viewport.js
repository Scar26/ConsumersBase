var watchbg = document.querySelector('#watchbg');
var topnav = document.querySelector('#topnav')
window.onscroll = function(){
	var bounding = watchbg.getBoundingClientRect();
	console.log(bounding.bottom);
	if (bounding.bottom<=100) {
		topnav.style.marginTop="-200px";
	}
	else{
		topnav.style.marginTop="0px";
	}
};