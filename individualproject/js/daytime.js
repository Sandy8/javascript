let _offset, _cityValue;

function dayTime() {
    _cityValue = document.getElementById("cityValue").value;
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    if (_cityValue == "Toronto") {
       document.getElementById("city").innerHTML = _cityValue;
	   document.getElementById("day").innerHTML = "\n\n" + _cityValue + "'s Day&Time is : " + d.toLocaleString() + ".\n";
    } else if (_cityValue == "Mumbai") {
        _offset = "+5.5";
		var nd = new Date(utc + (3600000 * _offset));
		document.getElementById("city").innerHTML = _cityValue;
		document.getElementById("day").innerHTML = "\n\n" + _cityValue + "'s Day&Time is : " + nd.toLocaleString() + ".\n";
    } else if (_cityValue == "California") {
        _offset = "-8";
		var nd = new Date(utc + (3600000 * _offset));
		document.getElementById("city").innerHTML = _cityValue;
		document.getElementById("day").innerHTML = "\n\n" + _cityValue + "'s Day&Time is : " + nd.toLocaleString() + ".\n";
    } else if (_cityValue == "Sydney") {

    }   
}

window.onload = function() {
    document.getElementById("dayTimeValue").onclick = dayTime;
}