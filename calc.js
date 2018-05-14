var display = null;
var equation = null;
var value_save = null;
var operation = null;

function load() {
    display = document.getElementById("display");
    equation = document.getElementById("equation");
}

function ce() {
    display.innerHTML = "";
}

function c() {
    display.innerHTML = "";
    equation.innerHTML = "";
    value_save = null;
}

function number(num) {
    display.innerHTML += num;
}