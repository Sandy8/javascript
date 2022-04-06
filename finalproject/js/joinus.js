function submitfunction() {
    let _firstname = document.getElementById("firstname").value;
    let _lastname = document.getElementById("lastname").value;
	let _email = document.getElementById("email").value;
    let _isValid = true;
	let _emailValue = _email.trim();
	var _emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    if (_emailValue == "") {
		document.getElementById("emailerror").innerHTML = "*Required";
        _isValid = false;
        } else if (!_emailPattern.test(_emailValue)) {
            document.getElementById("emailerror").innerHTML = "*Must be a valid email address.";
			_isValid = false;
        } else {
                document.getElementById("emailerror").innerHTML = "";
		}
	if(_firstname == ""){
		document.getElementById("fnerror").innerHTML = "*Required";
	} else {
		document.getElementById("fnerror").innerHTML = "";
	}
	if(_lastname == ""){
		document.getElementById("lnerror").innerHTML = "*Required";
	} else {
		document.getElementById("lnerror").innerHTML = "";
	}
	let _emailarray = [];
	let _details;
	let scoreString = "";
	if(!_firstname == "" && !_lastname == "" && !_email == "" && _emailPattern.test(_emailValue)){
		_details =  {email:_email }
		_emailarray.push(_details);
		for (let i=0;i < _emailarray.length;i++) {
			scoreString += `${_emailarray[i]._email}\n`;
		}
		document.getElementById("joinuspage").style.visibility = "hidden" ;
	}
	console.log(_emailarray);
}
function firstname() {
	document.getElementById("firstname").value = "";
}
function lastname() {
	document.getElementById("lastname").value = "";
}
function email() {
	document.getElementById("email").value = "";
}
function joinus() {
	document.getElementById("joinuspage").style.visibility = "visible" ;
}
function closesection() {
	document.getElementById("joinuspage").style.visibility = "hidden" ;
}
window.onload = function() {
    document.getElementById("submit").onclick = submitfunction;
    document.getElementById("firstname").onfocus = firstname;
    document.getElementById("lastname").onfocus = lastname;
    document.getElementById("email").onfocus = email;
	document.getElementById("joinus").onclick = joinus;
	document.getElementById("closesection").onclick = closesection;
}