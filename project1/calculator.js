function clr() {
    document.getElementById("display").value = "";
}

function log() {
    let valueLog = document.getElementById("display").value;
    document.getElementById("display").value = Math.log(valueLog);
}

function root() {
    let valueRoot = document.getElementById("display").value;
    document.getElementById("display").value = Math.sqrt(valueRoot);
}

function sqr() {
    let valueSqr = document.getElementById("display").value;
    document.getElementById("display").value = (valueSqr * valueSqr);
}

function back() {
    let valueLog = document.getElementById("display").value;
    let valueDisplay = String(valueLog);
    valueDisplay = valueDisplay.slice(0, -1);
    document.getElementById("display").value = valueDisplay;
}

function equal() {
    let equalValue = document.getElementById('display').value;
    let equalValueString = String(equalValue);
    let equalValueStringNumber = equalValueString.match(/\d+/);
    let equalDisplay = eval(equalValueString);
    if (equalValueString.includes("sin") || equalValueString.includes("cos") || equalValueString.includes("tan")) {
        if (equalValueString.startsWith("sin") && equalValueString.endsWith(")")) {
            let sinValue = Math.sin(equalValueStringNumber);
            document.getElementById('display').value = Math.round(sinValue);
        } else if (equalValueString.startsWith("cos") && equalValueString.endsWith(")")) {
            let cosValue = Math.cos(equalValueStringNumber);
            document.getElementById('display').value = Math.round(cosValue);
        } else if (equalValueString.startsWith("tan") && equalValueString.endsWith(")")) {
            let tanValue = Math.tan(equalValueStringNumber);
            document.getElementById('display').value = Math.round(tanValue);
        } else {
            document.getElementById('display').value = "";
            alert("Enter sin, cos & tan separately.");
        }
    } else {
        document.getElementById('display').value = equalDisplay;
    }
}

function zero() {
    const zero = document.getElementById("display").value += '0';
}

function one() {
    const one = document.getElementById("display").value += '1';
}

function two() {
    const two = document.getElementById("display").value += '2';
}

function three() {
    const three = document.getElementById("display").value += '3';
}

function four() {
    const four = document.getElementById("display").value += '4';
}

function five() {
    const five = document.getElementById("display").value += '5';
}

function six() {
    const six = document.getElementById("display").value += '6';
}

function seven() {
    const seven = document.getElementById("display").value += '7';
}

function eight() {
    const eight = document.getElementById("display").value += '8';
}

function nine() {
    const nine = document.getElementById("display").value += '9';
}

function add() {
    const add = document.getElementById("display").value += "+";
}


function piValue() {
    const pi = document.getElementById("display").value += Math.PI;
}

function sub() {
    const sub = document.getElementById("display").value += '-';
}

function div() {
    const div = document.getElementById("display").value += '/';
}

function mul() {
    const mul = document.getElementById("display").value += '*';
}

function sin() {
    const sin = document.getElementById("display").value += 'sin(';

}

function cos() {
    const cos = document.getElementById("display").value += 'cos(';
}

function tan() {
    const tan = document.getElementById("display").value += 'tan(';
}

function para() {
    const displayValue = document.getElementById("display").value;
    let displayValueString = String(displayValue);
    if (displayValueString.includes("(")) {
        document.getElementById("display").value += ")";
    } else {
        document.getElementById("display").value += "(";
    }
}

window.onload = function() {
    let display = document.getElementById("display");
    document.getElementById("clear").onclick = clr;
    document.getElementById("log").onclick = log;
    document.getElementById("root").onclick = root;
    document.getElementById("sqr").onclick = sqr;
    document.getElementById("back").onclick = back;
    document.getElementById("zero").onclick = zero;
    document.getElementById("one").onclick = one;
    document.getElementById("two").onclick = two;
    document.getElementById("three").onclick = three;
    document.getElementById("four").onclick = four;
    document.getElementById("five").onclick = five;
    document.getElementById("six").onclick = six;
    document.getElementById("seven").onclick = seven;
    document.getElementById("eight").onclick = eight;
    document.getElementById("nine").onclick = nine;
    document.getElementById("pi").onclick = piValue;
    document.getElementById("add").onclick = add;
    document.getElementById("sub").onclick = sub;
    document.getElementById("div").onclick = div;
    document.getElementById("mul").onclick = mul;
    document.getElementById("sin").onclick = sin;
    document.getElementById("cos").onclick = cos;
    document.getElementById("tan").onclick = tan;
    document.getElementById("equal").onclick = equal;
    document.getElementById("parenthesis").onclick = para;
}