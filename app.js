// querySelector gives the first one with lookup value
// querySelectorAll returns all matching lookup value

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// Click handler
function clickHandler(){
    outputDiv.innerText = "banana language";
}

// arguments: event name, function name
btnTranslate.addEventListener("click", clickHandler);
