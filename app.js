var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
// querySelector gives the first one with lookup value
// querySelectorAll returns all matching lookup value

console.log(txtInput)
// Click handler
function clickHandler(){
    console.log(txtInput.value);
}

// arguments: event name, function name
btnTranslate.addEventListener("click", clickHandler);

// querySelector() works on the principles of CSS selectors. It selects and returns the first element which matches the query.
var txtQuery = document.querySelector("textarea");
var txtQuery = document.querySelector(".btn-primary");
var txtQuery = document.querySelector("#input-btn");
var txtQuery = document.querySelector(input[name="translator"]);