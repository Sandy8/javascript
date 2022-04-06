var myAudio2 = new Audio('images/2-MinuteGuidedMeditation.mp3');
var myAudio10 = new Audio('images/10MinutGuidedMeditation.mp3');

function meditation2() {
	document.getElementById("start2medAudio").style.visibility = "visible";
	myAudio10.pause();
}

function meditation10() {
	document.getElementById("start10medAudio").style.visibility = "visible";
	myAudio2.pause();
}

window.onload = function() {
 	document.getElementById("start2med").onclick = meditation2;
	document.getElementById("start10med").onclick = meditation10;
}