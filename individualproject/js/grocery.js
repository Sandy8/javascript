let _addList;

function addList() {
	_addList = document.getElementById("groceryname").value;
	let ul = document.getElementById("listing");
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(_addList));
	ul.appendChild(li);
}

function removeLast() {
	listNode = document.getElementById('listing');
	listNode.removeChild(listNode.getElementsByTagName('li')[0]);
}

function deleteAll() {
	document.getElementById('listing').innerHTML = "" ;
}

function addFocus() {
	document.getElementById("groceryname").value = "" ;
}

window.onload = function() {
    document.getElementById("addtolist").onclick = addList;
	document.getElementById("removeLast").onclick = removeLast;
	document.getElementById("deleteAll").onclick = deleteAll;
	document.getElementById("groceryname").onfocus = addFocus;
}