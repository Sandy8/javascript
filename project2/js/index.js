let score = 0, highscore = 0;
let _yeti, _penguins, _current_score, _high_score, _pys, penguinArray, arrayDivs = [];

$(document).ready(function() {

    //This code will run after your page loads
	
	_current_score = document.querySelector("#current_score");
	_high_score = document.getElementById("high_score");
	_pys = document.querySelector("#pys");
	_incLevel = document.querySelector("#increaseLevel");
	_decLevel = document.querySelector("#decreaseLevel");
	gameBegin();
});

let setClick = function() {
	_yeti = document.querySelector("#yeti");
    _penguins = document.querySelectorAll(".penguin");

    _penguins.forEach(function (_penguin) {
        _penguin.onclick = penguinClick;
    });
	_incLevel.onclick = incClick;
	_decLevel.onclick = decClick;
    _yeti.onclick = yetiClick;
}

const penguinClick = function() {
	var myAudio = new Audio('images/salamisound-6978034-sfx-power-up-22-games.mp3');
	myAudio.play();
	score += 1;
	console.log("penguinClick");
	_current_score.innerHTML = score;
	$(this).hide();
}

const yetiClick = function() {
	var myAudio = new Audio('images/salamisound-5820638-sfx-power-up-20-games.mp3');
	myAudio.play();
	console.log("yetiClick");	
	endGame();
	gameBegin();
}

let gameBegin = function() {
	arrayDivs = [];
	arrayCount = 0;
	for (i=0; i<3; i++ ) {
		for (j=0; j<3; j++) {
			penguinArray = document.createElement("div");
            penguinArray.classList.add("penguin");
            arrayCount++;
            penguinArray.setAttribute("id", "penguin" + arrayCount);
            arrayDivs.push(penguinArray);
		}
	}
	
	let yetiArray = document.createElement("div");
     yetiArray.classList.add("yeti");
    yetiArray.setAttribute("id", "yeti");
    arrayDivs.push(yetiArray);
	$("#pys").empty();
	arrayDivs = arrayDivs.sort(() => Math.random() - 0.5);
	for (let i = 0; i < arrayDivs.length; i++) {
        _pys.appendChild(arrayDivs[i]);
    }
	console.log(arrayDivs);
	setClick();
};

const decClick = function() {
	gameBegin();
}

const incClick = function() {
	arrayDivs = [];
	arrayCount = 0;
	for (i=0; i<4; i++ ) {
		for (j=0; j<4; j++) {
			penguinArray = document.createElement("div");
            penguinArray.classList.add("penguin");
            arrayCount++;
            penguinArray.setAttribute("id", "penguin" + arrayCount);
            arrayDivs.push(penguinArray);
		}
	}
	let yetiArray = document.createElement("div");
     yetiArray.classList.add("yeti");
    yetiArray.setAttribute("id", "yeti");
    arrayDivs.push(yetiArray);
	arrayDivs = arrayDivs.sort(() => Math.random() - 0.5);
	for (let i = 0; i < arrayDivs.length; i++) {
        _pys.appendChild(arrayDivs[i]);
    }	
}


let endGame = function(){
	score=0;
	_current_score.innerHTML = "";
	alert("Yaarrrrr");
}