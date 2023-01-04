//Variable Declarations

var translatebutton = document.querySelector("#btn-translate");
var textinput = document.querySelector("#txt-input");
var outputtext = document.querySelector("#output");

//Server Url

var url = "https://api.funtranslations.com/translate/dolan.json";

function fetchTranslationURL(input) {
    return url + "?" + "text=" + input;
}

translatebutton.addEventListener("click", () => {
    var response = (response) => response.json();   //Declaring variables for response and displaying.
    var display = (display) => {
        var translatedText = display.contents.translated;
        outputtext.innerText = translatedText;
    };
    fetch(fetchTranslationURL(textinput.value))
    .then(response)
    .then(display)
    .catch((error) => {
       alert
    ("you have used the app for the fifth time, come after an hour.");
    return console.log("error came!!", error);
    });
});