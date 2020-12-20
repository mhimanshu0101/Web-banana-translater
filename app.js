var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput)
// Click handler
function clickHandler(){
    console.log(txtInput.value);
}

// arguments: event name, function name
btnTranslate.addEventListener("click", clickHandler);