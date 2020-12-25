// querySelector gives the first one with lookup value
// querySelectorAll returns all matching lookup value

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// console.log(outputDiv)

var url = "https://api.funtranslations.com/translate/minion.json?text="

function errorHandled(error){
    alert("Something has broked, we will be back soon.")
}
// callback function
function translate(text){
    fetch(url+text).then(response => response.json()).then(
        json => {
            outputDiv.innerText = json.contents.translated;
        })
        .catch(errorHandled)
}

// Click handler
function clickHandler(){
    if (txtInput.value === ""){
        alert("Write Something.")
        return
    }
    else{
    translate(txtInput.value)
    }
}

// arguments: event name, function name
btnTranslate.addEventListener("click", clickHandler);
